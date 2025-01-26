import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword ,
  onAuthStateChanged,
  signOut,

} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAl9bl87rTaDIQYQMn4EjVbS7VKR6JEIgE",
  authDomain: "loginauthentication-d494e.firebaseapp.com",
  projectId: "loginauthentication-d494e",
  storageBucket: "loginauthentication-d494e.firebasestorage.app",
  messagingSenderId: "136795279940",
  appId: "1:136795279940:web:5e59df8a395621825c6211",
  measurementId: "G-GRELJP8M52",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const handleSignup = () => {
  const email = document.getElementById("email-signup").value;
  const password = document.getElementById("password-signup").value;

  if (email && password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
          alert("User signed In Successfully");
        window.location.href = "./login.html";

      })
      .catch((error) => {
        alert(error.message);
      });
  }
};

const handleLogin = () => {
    const email = document.getElementById("email-login").value;
    const password = document.getElementById("password-login").value;
  
    if (email && password) {
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredentials) => {
            console.log(userCredentials);
            alert("User Logged In Successfully");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };
  onAuthStateChanged(auth,(user)=>{
    const LogOutBtn = document.getElementById("logout-btn")
    if(user){
        LogOutBtn.style.display = "block";
        LogOutBtn.addEventListener("click",(e)=>{
            e.preventDefault();
            signOut(auth);
            window.location.href = "./signUp.html"
        })
    }
    else{
        console.log("user not logged in");
        LogOutBtn.style.display = "none";
    }
  })
  const SignUpbtn = document.getElementById("Signup-btn")
  if(SignUpbtn){
    SignUpbtn.addEventListener("click",(e)=>{
        e.preventDefault();
        handleSignup();
    })
  }

  const Loginbtn = document.getElementById("Login-btn")
  if(Loginbtn){
    Loginbtn.addEventListener("click",(e)=>{
        e.preventDefault;
        handleLogin();
    })
  }
