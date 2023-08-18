import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"

function useGetColl() {
    const [documents, setDocument] = useState([])

    useEffect(()=>{
    const db = getFirestore();

    const documentsColl = collection(db, "productos")
    getDocs(documentsColl).then((snapshot)=>{
        if (snapshot.size > 0){
        const documentos = snapshot.docs.map((doc)=>{
            return {
            id: doc.id,
            ...doc.data(),
            }
        });
        setDocument(documentos)
        }
        
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {documents}

}

export default useGetColl;