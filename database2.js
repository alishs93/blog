// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js";

// Firebase configuration
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
const database = getDatabase(app);



// Function to get data
function getData(number) {
    get(child(ref(database), "links/nt" + number)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log("📢 لینک ذخیره‌شده:", snapshot.val().url);
            document.getElementById("link").value = snapshot.val().url; // مقداردهی خودکار به input
            return snapshot.val().url; // بازگشت لینک از دیتابیس
        } else {
            console.log("❌ اطلاعات یافت نشد!");
            document.getElementById("link").value = ""; // اگر داده نبود، input خالی شود
            return null; // اگر داده نبود، null برمی‌گرداند
        }
    }).catch((error) => {
        console.error("❌ خطا در دریافت اطلاعات:", error);
        return null; // در صورت بروز خطا، null برمی‌گرداند
    });
}


document.getElementById("play").onclick = function () {
    link=getData(document.getElementById("number2").value);
    location.href="play.html?url="+link;
};
