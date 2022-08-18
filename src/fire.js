import firebase from "firebase/compat/app";
import "firebase/compat/app"
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD0JjEjdQM5kr18frd7xmCGY3k_9uJlwrI",
    authDomain: "nft-project-3d19d.firebaseapp.com",
    projectId: "nft-project-3d19d",
    storageBucket: "nft-project-3d19d.appspot.com",
    messagingSenderId: "645021774879",
    appId: "1:645021774879:web:776f079e44d02166b6112a",
    measurementId: "G-8DG3650RTR"
};

const fire = firebase.initializeApp(firebaseConfig)
export default fire;