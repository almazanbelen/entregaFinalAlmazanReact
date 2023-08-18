import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpir0El1zaFLB5bx6NI-pJWhAuPufWU-A",
  authDomain: "coderhouse-ecommerce-bbfbe.firebaseapp.com",
  projectId: "coderhouse-ecommerce-bbfbe",
  storageBucket: "coderhouse-ecommerce-bbfbe.appspot.com",
  messagingSenderId: "1093531791156",
  appId: "1:1093531791156:web:66a1743ce9515a385d7f61"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
