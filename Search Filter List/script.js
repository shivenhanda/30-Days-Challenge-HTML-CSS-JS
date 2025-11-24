let search = document.querySelector("#search");
let List = document.querySelectorAll("li");
search.addEventListener("input", (evt) => {
    let value = evt.target.value.toLowerCase();
    List.forEach((data) => {
        if (data.textContent.toLowerCase().includes(value)) {
            data.style.display = "block";
        } else {
            data.style.display = "none";
        }
    })
})