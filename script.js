const online = false;
const lineh=document.getElementById("offline");
if (!online) {
    onofflined();
}else{
    ononlined();
}

function onofflined() {
    lineh.style.display="block";
    document.querySelector("body").style.overflow="hidden";
}

function ononlined() {
    lineh.style.display="none";
    document.querySelector("body").style.overflow="auto";
}


setInterval(() => {
    onLine = navigator.onLine;
    if (!online) {
        onofflined();
    }else{
        ononlined();
    }
}, 1000);