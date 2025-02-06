const statusnavr=false;
const navbarc=document.getElementById("collapsibleNavbar");
function navbar() {
    if (statusnavr==false) {
        navbarc.style.animation="backInleft";
        statusnavr==true;
    } else {
        navbarc.style.animation="backInleft";
        navbarc.style.display="none";
    }
}