import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";



const firebaseConfig = {
  apiKey: "AIzaSyBjpbyb6Pff7zQ4I3czTdJhjis_vNKJVKo",
  authDomain: "babyshark-66b4c.firebaseapp.com",
  projectId: "babyshark-66b4c",
  storageBucket: "babyshark-66b4c.firebasestorage.app",
  messagingSenderId: "976444448103",
  appId: "1:976444448103:web:38b717cb1334ba5871e3c2",
  measurementId: "G-VM34SJQRGZ"
};

const app = initializeApp(firebaseConfig);

//initialize authentification 
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user; //storing user detail
        await addDoc(collection(db, "user"), { 
            //data we are storing
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error("Invalid email or password")
      
         }  
    }

//creating user login function 
const login = async(email, password)=>{
    try {
       await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error("Invalid email or password")

        
    }

}

//creating user logout function 
const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout}; //so we can connect it to the login file
