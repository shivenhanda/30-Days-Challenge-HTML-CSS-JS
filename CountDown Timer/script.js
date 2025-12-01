let time = document.getElementById("time");
let button = document.querySelector("button");
let value;
button.addEventListener("click", () => {
    clearInterval(value);
    let hh = parseInt(document.getElementById("hour").value.trim()) || 0;
    let mm = parseInt(document.getElementById("minute").value.trim()) || 0;
    let ss = parseInt(document.getElementById("second").value.trim()) || 0;
    if(mm>60 || ss>60 || hh<0 || mm<0 || ss<0){
        time.innerHTML = "Enter Valid Time"; 
        return;
    }
    value = setInterval(() => {
        if (hh <= 0 && mm <= 0 && ss <= 0) {
            clearInterval(value);
            time.innerHTML = "CountDown Timer Completed";
            return;
        }
        time.innerHTML = `${hh} : ${mm} : ${ss}`;
        ss--;
        if (ss < 0) {
            ss = 59;
            mm--;
        }
        if (mm < 0) {
            mm = 59;
            hh--;
        }
    }, 1000);
});