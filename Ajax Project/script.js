let button = document.querySelector("button");
button.addEventListener("click", () => {
    let request = new XMLHttpRequest();

    request.open("GET", "about.html");
    request.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200) {
            document.querySelector(".container").innerHTML = this.responseText;
        }
    }
    request.send();
})