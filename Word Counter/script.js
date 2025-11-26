let text = document.getElementById("text");
let character = document.getElementById("character");
let word = document.getElementById("word");
character.style.display = "none";
word.style.display = "none";

text.addEventListener("input", () => {
    let length = text.value.length;
    character.innerText = `${length} Character`
    character.style.display = "block";
    for (let i = 0; i < length; i++) {
        if (text[i] == " ") {
            words++;
        }
    }
    let words = text.value.trim().split(/\s+/).filter(a => a).length;
    word.innerText = `${words} Words`;
    word.style.display = "block";
    if (character.textContent == "" || length == 0) {
        character.style.display = "none";
    }
    if (word.textContent == "" || words == 0) {
        word.style.display = "none";
    }
})