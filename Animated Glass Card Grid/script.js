let cardlist = document.querySelectorAll(".card");

cardlist.forEach(card=>{
card.addEventListener("mousemove", (e) => {
  let rect = card.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  let rotateY = (x / rect.width - 0.5) * 30; // left-right
  let rotateX = - (y / rect.height - 0.5) * 30; // up-down

  card.style.transform = `
    perspective(600px) 
    rotateX(${rotateX}deg) 
    rotateY(${rotateY}deg)
  `;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "perspective(600px) rotateX(0) rotateY(0)";
});
})
