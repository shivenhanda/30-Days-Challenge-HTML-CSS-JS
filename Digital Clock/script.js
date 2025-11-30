function updateClock(){
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    document.getElementById("clock").innerText = `${h}:${m}:${s}`;
}

setInterval(updateClock, 1000);
updateClock();

const toggleBtn = document.getElementById("Toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});
