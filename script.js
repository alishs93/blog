const online = navigator.onLine;
const lineh=document.getElementById("");
if (!online) {
    onofflined();
}else{
    ononlined();
}

function onofflined() {
    
}

function ononlined() {
    
}


setInterval(() => {
    onLine = navigator.onLine;
    if (!online) {
        onofflined();
    }else{
        ononlined();
    }
}, 1000);