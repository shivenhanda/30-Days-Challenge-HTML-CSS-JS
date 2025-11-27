let toggle = document.querySelector("#toggle");
let body = document.querySelector("body");
let main = document.querySelector("main");
let header = document.querySelector("header");
let p = document.querySelector("p");
let button = false;

function effect() {
    button = !button;
    if (button) {
        toggle.innerHTML = `<i class="fa-solid fa-toggle-on fa-xl"></i>`;
        main.style.backgroundColor = "black";
        main.style.color = "white";
        header.style.backgroundColor = "black";
        header.style.color = "white";
        p.innerText = `Dark Mode On`
    }

    else {
        toggle.innerHTML = `<i class="fa-solid fa-toggle-off fa-xl"></i>`;
        main.style.backgroundColor = "white";
        main.style.color = "black";
        header.style.backgroundColor = "orange";
        header.style.color = "black";
        p.innerText = `Dark Mode Off`
    }
}