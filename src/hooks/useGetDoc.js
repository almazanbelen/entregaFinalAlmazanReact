import { getFirestore, doc, getDoc} from "firebase/firestore"
import { useEffect, useState } from "react"




function useGetDoc(id){

    const [data, setData] = useState({})

    useEffect(()=> {
        const db = getFirestore();
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then((snapshot)=>{
                if(snapshot.exists()){
                    const dataP = snapshot.data();
                    const product = {
                        id: snapshot.id, ...dataP
                    }
                    setData(product)
                }                
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    return { data }

}

export default useGetDoc;