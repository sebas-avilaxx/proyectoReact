
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAUX-weFo6fyYVoUtnxMMzRsZUBNA_99Z4",
    authDomain: "tienda-cerveza-7bae8.firebaseapp.com",
    projectId: "tienda-cerveza-7bae8",
    storageBucket: "tienda-cerveza-7bae8.appspot.com",
    messagingSenderId: "313510923530",
    appId: "1:313510923530:web:ce44b243de60acaa553ef3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);