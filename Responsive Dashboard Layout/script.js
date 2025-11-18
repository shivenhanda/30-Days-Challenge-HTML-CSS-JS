let menutoggle = document.getElementById("menutoggle")
let sidebarcontent = document.getElementById("sidebarcontent")
let sidebar = document.querySelector(".sidebar")
let maincontent = document.getElementById("maincontent")
menutoggle.style.display = "none"
function checkwidth() {
    if (window.innerWidth <= 700) {
        menutoggle.style.display = "block";
        return;
    }
    menutoggle.style.display = "none"
    sidebar.style.width="180px";
    maincontent.style.marginLeft="180px";
    sidebarcontent.style.display = "flex";
    sidebarcontent.style.flexDirection = "columns";
    
}
menutoggle.addEventListener("click", () => {
    sidebarcontent.style.display = "flex";
    sidebarcontent.style.flexDirection = "columns";
    sidebar.style.width="180px";
    maincontent.style.marginLeft="180px";
});
maincontent.addEventListener("click", () => {
    if (menutoggle.style.display == "block") {
        sidebarcontent.style.display = "none";
        sidebar.style.width="40px";
    }
});
checkwidth();
window.addEventListener("resize", checkwidth)