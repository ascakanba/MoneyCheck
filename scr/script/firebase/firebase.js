 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCF3L2WRXyuhV301I-1ZldzWrek0D_ddvQ",
    authDomain: "moneycheck-21fdb.firebaseapp.com",
    projectId: "moneycheck-21fdb",
    storageBucket: "moneycheck-21fdb.firebasestorage.app",
    messagingSenderId: "621535003448",
    appId: "1:621535003448:web:7566442428dcb8cb6fb7cd",
    measurementId: "G-PVTPZQ7KN4"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);