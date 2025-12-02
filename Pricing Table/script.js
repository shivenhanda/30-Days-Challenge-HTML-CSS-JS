const toggle = document.querySelector("#toggle");
const button = document.querySelector("button");
const save = document.querySelector("#save");
const month1 = document.querySelector(".month1");
const month2 = document.querySelector(".month2");
const month3 = document.querySelector(".month3");
const monthly = [...document.querySelectorAll(".monthly")];
let condition = true;
month1.innerHTML = `$12<span>/mo</span>`
month2.innerHTML = `$24<span>/mo</span>`
month3.innerHTML = `$60<span>/mo</span>`
button.addEventListener("click", () => {
    if (condition) {
        save.style.display = "inline";
        toggle.style.marginLeft = "22px"
        monthly.forEach(element => {
            element.style.display = "inline";
        });
        month1.innerHTML = `$99<span>/yr</span>`
        month2.innerHTML = `$199<span>/yr</span>`
        month3.innerHTML = `$499<span>/yr</span>`
    }
    else {
        save.style.display = "none";
        monthly.forEach(element => {
            element.style.display = "none";
        });
        toggle.style.marginLeft = "0px"
        month1.innerHTML = `$12<span>/mo</span>`
        month2.innerHTML = `$24<span>/mo</span>`
        month3.innerHTML = `$60<span>/mo</span>`
    }
    condition = !condition;
})