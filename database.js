// Function to save data to Google Sheets via Apps Script
function saveData(link, number) {
    const url = 'https://script.google.com/macros/s/AKfycbwWOumHNXuSZdkzFhGtTWt_uxIeSZ3eVXIZ8TV1_Xh0xWSEdmZQgYPiFHUXvkxey8g/exec';
    const params = {
        action: 'insert',  // عملیات insert برای ذخیره‌سازی داده
        number: number,
        url: link
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(result => alert(result)) // نتیجه درخواست را نمایش می‌دهیم
    .catch(error => alert("❌ خطا در ذخیره داده: " + error.message));
}

// Function to get data from Google Sheets via Apps Script
async function getData(number) {
    document.getElementById("link").value = "درحال یافتن لینک...";
    const url = 'https://script.google.com/macros/s/AKfycbwWOumHNXuSZdkzFhGtTWt_uxIeSZ3eVXIZ8TV1_Xh0xWSEdmZQgYPiFHUXvkxey8g/exec';
    const params = {
        action: 'get',  // عملیات get برای دریافت داده
        number: number
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.text();
        
        if (data !== "❌ اطلاعات یافت نشد!") {
            const result = JSON.parse(data);
            console.log("📢 لینک ذخیره‌شده:"+ result.url);
            document.getElementById("link").value = result.url; // مقداردهی خودکار به input
            return result.url; // بازگشت لینک از دیتابیس
        } else {
            console.log("❌ اطلاعات یافت نشد!");
            document.getElementById("link").value = ""; // اگر داده نبود، input خالی شود
            return null; // اگر داده نبود، null برمی‌گرداند
        }
    } catch (error) {
        console.error("❌ خطا در دریافت اطلاعات:"+ error);
        return null; // در صورت بروز خطا، null برمی‌گرداند
    }
}

// Set event listener for button click
document.getElementById("save").onclick = function () {
    const link = document.getElementById("link").value;
    const number = document.getElementById("number").value;
    saveData(link, number);
};

// Check database when select changes
const selectedNumber = document.getElementById("number").value;
getData(selectedNumber); // بررسی دیتابیس هنگام تغییر مقدار select
document.getElementById("number").addEventListener("change", function () {
    const selectedNumber = this.value;
    getData(selectedNumber); // بررسی دیتابیس هنگام تغییر مقدار select
});
