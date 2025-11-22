let showbutton = document.getElementById("showbutton");
let hidebutton = document.getElementById("hidebutton");
let copybutton = document.getElementById("copybutton");
let reset = document.getElementById("reset");
let Password = document.getElementById("Password");
let copied = document.getElementById("copied");
let checkpassword = document.getElementById("checkpassword");

showbutton.addEventListener("click", (e) => {
    e.preventDefault();
    Password.type = "text";
})
hidebutton.addEventListener("click", (e) => {
    e.preventDefault();
    Password.type = "password";
})
copybutton.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(Password.value).then(() => {
        copied.innerText = `Password Successful Copied`;
    })
})
reset.addEventListener("click", (e) => {
    e.preventDefault();
    Password.value = ""
    copied.innerText = ""
    checkpassword.innerText = ``;
    show();
    let box = document.querySelector(".box").style.display = "block";
})

let uppertext = document.querySelector(".uppertext");
let lowertext = document.querySelector(".lowertext");
let numbertext = document.querySelector(".numbertext");
let specialtext = document.querySelector(".specialtext");
let lengthtext = document.querySelector(".lengthtext");

Password.addEventListener("input", (evt) => {
    let upper = /[A-Z]/.test(evt.target.value)
    let lower = /[a-z]/.test(evt.target.value)
    let number = /[0-9]/.test(evt.target.value)
    let special = /[^A-Za-z0-9]/.test(evt.target.value)
    let length = (evt.target.value.length >= 8) ? true : false;
    let count = 0;
    let array = [upper, lower, number, special, length];
    array.map((data, index) => {
        if (data == true) {
            count++;
            switch (index) {
                case 0:
                    uppertext.innerText = "";
                case 1:
                    lowertext.innerText = "";
                case 2:
                    numbertext.innerText = "";
                case 3:
                    specialtext.innerText = "";
                case 4:
                    lengthtext.innerText = "";
            }
        }
        else {
            switch (index) {
                case 0:
                    uppertext.innerText = "Password must have Upper letters ( A-Z )";
                    break;
                case 1:
                    lowertext.innerText = "Password must have lower letters ( a-z )";
                    break;
                case 2:
                    numbertext.innerText = "Password must have numbers ( 0-9 )";
                    break;
                case 3:
                    specialtext.innerText = "Password must have Special characters";
                case 4:
                    lengthtext.innerText = "Password must have length of 8 or more";
            }
        }
    })
    checkpassword.innerText = (count <= 2) ? "weak" : (count == 3) ? "Moderate" : (count == 4) ? "Strong" : (count == 5) ? "Very Strong" : "";
    checkpassword.style.color = "yellow";
    if (count == 5) {
        let box = document.querySelector(".box").style.display = "none";
    }
})
function show() {
    uppertext.innerText = "Password must have Upper letters ( A-Z )";
    lowertext.innerText = "Password must have lower letters ( a-z )";
    numbertext.innerText = "Password must have numbers ( 0-9 )";
    specialtext.innerText = "Password must have Special characters";
    lengthtext.innerText = "Password must have length of 8 or more";
}
show();