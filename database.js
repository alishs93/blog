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

// Function to save data
function saveData(link, number) {
    set(ref(database, "links/nt" + number), {
        url: link
    }).then(() => {
        alert("✅ اطلاعات ذخیره شد!");
    }).catch((error) => {
        alert("❌ خطا در ذخیره اطلاعات: " + error.message);
    });
}

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

// Set event listener for button click
document.getElementById("save").onclick = function () {
    saveData(document.getElementById("link").value, document.getElementById("number").value);
};


// Check database when select changes
document.getElementById("number").addEventListener("change", function () {
    const selectedNumber = this.value;
    getData(selectedNumber); // بررسی دیتابیس هنگام تغییر مقدار select
});
