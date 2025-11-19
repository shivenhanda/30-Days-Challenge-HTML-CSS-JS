let username = document.querySelector("#username");
let password = document.querySelector("#password");
let submit = document.querySelector("#submit");
let reset = document.querySelector("#reset");
let result = document.querySelector("#result");

submit.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (username.value.trim() == "" || password.value.trim() == "") {
        result.innerText = `Enter Correct Information`;
        return;
    }
    else if (username.value.trim() == "admin" && password.value.trim() == "12345") {
        result.innerText = `Login Successfully`;
        return;
    }
    else {
        result.innerText = `Not Login Successfully`;
    }
})
reset.addEventListener("click", () => {
    result.innerText = ``;
    username.value = "";
    password.value = ""
})