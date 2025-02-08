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

// دکمه "دیدن فیلم" کلیک می‌شود
document.getElementById("play").onclick = async function () {
    const number = document.getElementById("number2").value;
    console.log("📢 شماره انتخاب شده:"+ number); // نمایش شماره انتخاب شده در کنسول
    
    const link = await getData(number);
    console.log("📢 لینک دریافتی:"+ link); // نمایش لینک دریافتی از getData

    if (link && number !== "") {
        console.log("📢 هدایت به صفحه جدید با لینک:"+ link);
        location.href = "play.html?url=" + decodeURIComponent(link); // به صفحه جدید هدایت می‌کند
    } else {
        alert("❌ لینک ویدیو یافت نشد!");
    }
};

// Check database when select changes
const selectedNumber = document.getElementById("number2").value;
getData(selectedNumber); // بررسی دیتابیس هنگام تغییر مقدار select
document.getElementById("number2").addEventListener("change", function () {
    const selectedNumber = this.value;
    getData(selectedNumber); // بررسی دیتابیس هنگام تغییر مقدار select
});

document.getElementById("number2").change();
