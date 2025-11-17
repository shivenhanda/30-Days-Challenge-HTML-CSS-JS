let text1 = document.querySelector(".text1")
let text2 = document.querySelector(".text2")
let text3 = document.querySelector(".text3")
let text4 = document.querySelector(".text4")
let text5 = document.querySelector(".text5")
let text = document.querySelector(".text")

function closeMenu() {
    if (document.querySelector(".line").innerHTML == `☰`) {
        document.querySelector(".container").style.width = `250px`;
        document.querySelector(".line").innerHTML = `<i class="fa-solid fa-x"></i>`;
        text1.innerHTML = `<i class="fa-regular fa-house"></i> Home`
        text2.innerHTML = `<i class="fa-solid fa-user"></i> Profile`
        text3.innerHTML = `<i class="fa-solid fa-message"></i> Message`
        text4.innerHTML = `<i class="fa-solid fa-folder"></i> File Management`
        text5.innerHTML = `<i class="fa-solid fa-comment"></i> Comments`
        text.innerText = `Shiven Handa Coding`
    }
    else {
        document.querySelector(".container").style.width = `50px`;
        document.querySelector(".line").innerHTML = `☰`;
        text1.innerHTML = `<i class="fa-regular fa-house"></i>`;
        text2.innerHTML = `<i class="fa-solid fa-user"></i>`;
        text3.innerHTML = `<i class="fa-solid fa-message"></i>`;
        text4.innerHTML = `<i class="fa-solid fa-folder"></i>`;
        text5.innerHTML = `<i class="fa-solid fa-comment"></i>`;
        text.innerText = ""
    }
}