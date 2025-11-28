
let select = document.querySelector("select");
let PlayersList = document.querySelector("#PlayersList");
let text = document.querySelector("#text");
let textarea = document.querySelector("#textarea");
let choice = document.querySelector("#choice");
let totalvalue = 2;

select.addEventListener("change", gamestart)
let random = 10;

function gamestart() {
    if (select.value == 0) {
        PlayersList.innerHTML = "Select Number of Player To Play";
        text.innerHTML = ``;
        return;
    }
    else if (select.value == 1) {
        choice.innerHTML = "Player 1 Turn"
    }
    else {
        random = 0;
    }
    PlayersList.innerHTML = `${select.value} Player ${totalvalue - select.value} Computer Game Start`;
}

function newgame() {
    select.value = 0;
    text.innerHTML = ``;
    gamestart();
    choice.innerHTML = ``;
}


let value = 0;

function value1() {
    if (value == 0) {
        value = 1;
    }
    else {
        random = 1;
    }
    if (select.value == 1) {
        choice.innerHTML = `Player 1 Turn`;
        computer();
    }
    else if (select.value == 2) {
        choice.innerHTML = `Player Two Turn`;
    }

    setTimeout(() => {
        gamelogic();
    }, 1000);
}
function value2() {
    if (value == 0) {
        value = 2;
    }
    else {
        random = 2;
    }
    if (select.value == 1) {
        choice.innerHTML = `Player 1 Turn`;
        computer();
    }
    else if (select.value == 2) {
        choice.innerHTML = `Player Two Turn`;
    }
    setTimeout(() => {
        gamelogic();
    }, 1000);
}
function value3() {
    if (value == 0) {
        value = 3;
    }
    else {
        random = 3;
    }
    if (select.value == 1) {
        choice.innerHTML = `Player 1 Turn`;
        computer();
    }
    else if (select.value == 2) {
        choice.innerHTML = `Player Two Turn`;
    }
    setTimeout(() => {
        gamelogic();
    }, 1000);
}

function gamelogic() {
    console.log(value)
    console.log(random)
    if (random == 0) {
        return;
    }
    else if (value == 0) {
        textarea.innerHTML = `Click Any of One Rock Paper Scissors`;
        return
    }
    else if (select.value == 0) {
        return
    }
    if (value == random) {
        text.innerHTML = `Both Player Choose the Same`;
        value = 0;
        random = 0;
        choice.innerHTML = "";
        return;
    }
    else if (value == 1 && random == 2) {
        text.innerHTML = `Player 2 Wins`;
        value = 0;
        random = 0;
        choice.innerHTML = "";
        return;
    }
    else if (value == 2 && random == 3) {
        text.innerHTML = `Player 2 Wins`;
        value = 0;
        random = 0;
        choice.innerHTML = "";
        return;
    }
    else if (value == 3 && random == 1) {
        text.innerHTML = `Player 2 Wins`;
        value = 0;
        random = 0;
        return;
    }
    else {
        text.innerHTML = `Player 1 Wins`;
        if (select.value == 1) {
            choice.innerHTML = "";
            return;
        }
    }
    choice.innerHTML = `Player 1 turn`;
    if (select.value == 1 && random != 0) {
        value = 0;
    }
}

function computer() {
    random = Math.floor((Math.random() * 3) + 1);
    if (random == 1) {
        choice.innerHTML = `Computer Choose Rock`
    }
    else if (random == 2) {
        choice.innerHTML = `Computer Choose Paper`
    }
    else {
        choice.innerHTML = `Computer Choose Scissors`
    }
}
