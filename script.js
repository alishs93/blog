const onLine=navigator.onLine;
if (!onLine) {
    function onlined() {
        
    }
}

setInterval(() => {
    onLine=navigator.onLine;
    onlined();
},1000);