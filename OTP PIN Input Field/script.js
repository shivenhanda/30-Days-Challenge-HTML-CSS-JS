
let array = [document.querySelector("#one"), document.querySelector("#two"), document.querySelector("#three"), document.querySelector("#four")]


array.map((data, index) => {
    data.addEventListener("input", () => {
        if (data.value != "" && index != array.length && (/[0-9]/.test(data.value))) {
            document.querySelector("h2").innerHTML = "";
            array[index + 1].focus();
        }
        else {
            document.querySelector("h2").innerHTML = `Enter the Valid OTP`
        }
    })
    data.addEventListener("keydown", (e) => {
        if (e.key == "Backspace" && index > 0 && data.value === "") {
            array[index - 1].focus();
        }
    })
})

