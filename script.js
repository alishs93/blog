const online = navigator.onLine;
const lineh = document.getElementById("offline");
if (!online) {
    onofflined();
} else {
    ononlined();
}

function onofflined() {
    lineh.style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
}

function ononlined() {
    lineh.style.display = "none";
    document.querySelector("body").style.overflow = "auto";
}


setInterval(() => {
    onLine = navigator.onLine;
    if (!online) {
        onofflined();
    } else {
        ononlined();
    }
}, 1000);


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAuxgjBntk28x7cfai582vRN91CyaCkuqg",
    authDomain: "bloggit-4f6a3.firebaseapp.com",
    databaseURL: "https://bloggit-4f6a3-default-rtdb.firebaseio.com",
    projectId: "bloggit-4f6a3",
    storageBucket: "bloggit-4f6a3.firebasestorage.app",
    messagingSenderId: "989685334083",
    appId: "1:989685334083:web:74af28866af0844d6454f6",
    measurementId: "G-R7G6PL229Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);