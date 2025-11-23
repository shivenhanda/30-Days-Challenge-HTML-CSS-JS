let text = document.getElementById("text");
let copybutton = document.getElementById("copybutton");
let copytext = document.getElementById("copytext");

copybutton.addEventListener("click", (evt) => {
    evt.preventDefault();
    navigator.clipboard.writeText(text.value.trim());
    copytext.innerText = text.value.trim();
    copytext.style.display = (copytext.innerText == "") ? "none" : "block"
})

copytext.innerText = "";
copytext.style.display = (copytext.innerText == "") ? "none" : "block";