import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHycVpN9xthGCCPeqSOpoz2K7dpSNGrTQ",
  authDomain: "ecommerce-react-bafc2.firebaseapp.com",
  projectId: "ecommerce-react-bafc2",
  storageBucket: "ecommerce-react-bafc2.appspot.com",
  messagingSenderId: "561675454745",
  appId: "1:561675454745:web:d54b1304eccc5ed9e35d88"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);