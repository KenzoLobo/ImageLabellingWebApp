import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCCrRTa6lQZvUOTqL3Z0SFWHhjBUYJaMzg",
    authDomain: "norse-strata-464821-e4.firebaseapp.com",
    projectId: "norse-strata-464821-e4",
    storageBucket: "norse-strata-464821-e4.firebasestorage.app",
    messagingSenderId: "666339966860",
    appId: "1:666339966860:web:afb31202e981d83dfea0a9",
    measurementId: "G-KR23MYH1GN"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);