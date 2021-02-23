import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    // apiKey: "AIzaSyDhPVoGstZPE9xXUClv4jX-SyWKBbQMRj4",
    // authDomain: "auth-development-d63d6.firebaseapp.com",
    // projectId: "auth-development-d63d6",
    // storageBucket: "auth-development-d63d6.appspot.com",
    // messagingSenderId: "543063414792",
    // appId: "1:543063414792:web:5502598d7316f785f119bd"

})

export const auth = app.auth()
export default app