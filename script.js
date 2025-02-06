let statusnavr = false;
const navbarc = document.getElementById("collapsibleNavbar");

function navbar() {
    if (!statusnavr) {
        navbarc.style.left = "0";  
        navbarc.style.opacity = "1";
        navbarc.style.visibility = "visible";
        navbarc.style.display = "block"; // نمایش منو

        navbarc.classList.remove("animate__backOutLeft");
        navbarc.classList.add("animate__backInLeft");

        statusnavr = true;
    } else {
        navbarc.classList.remove("animate__backInLeft");
        navbarc.classList.add("animate__backOutLeft");

        setTimeout(() => {
            navbarc.style.left = "-250px";  
            navbarc.style.opacity = "0";
            navbarc.style.visibility = "hidden";
            navbarc.style.display = "none"; // پنهان کردن کامل
        }, 500); // این مقدار باید برابر با زمان انیمیشن باشد

        statusnavr = false;
    }
}
