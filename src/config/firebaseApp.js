// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBbsdjUt_UK4aBluSdCykozqrp7041fDQ0",
    authDomain: "dashboard-8fbec.firebaseapp.com",
    projectId: "dashboard-8fbec",
    storageBucket: "dashboard-8fbec.appspot.com",
    messagingSenderId: "308975420334",
    appId: "1:308975420334:web:03c0d24ad4cbb758d07e3f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseDb = getFirestore(firebaseApp);
export default firebaseDb;
