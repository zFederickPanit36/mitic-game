const game = document.querySelector(".container-game");
const mitic = document.querySelector("#mitic");
const text = document.querySelector("#text");
const p = document.querySelector("#p");

let x = 0;
let y = 0;
let speed = 200;

window.addEventListener("keydown", move = (e) => {
    let key = e.key;
    console.log("px x: ", x);
    console.log("px y: ", y);

    switch (key) {
        case "ArrowUp":
        case "w":
        case "W":
            y -= speed;
            collisionDetectY();
            mitic.style.top = y + "px";
            break;
        case "ArrowDown":
        case "s":
        case "S":
            y += speed;
            collisionDetectY();
            mitic.style.top = y + "px";
            break;
        case "ArrowRight":
        case "d":
        case "D":
            x += speed;
            collisionDetectX();
            mitic.style.left = x + "px";
            break;
        case "ArrowLeft":
        case "a":
        case "A":
            x -= speed;
            collisionDetectX();
            mitic.style.left = x + "px";
            break;
        default:
            console.log("stocazzo");
    }

    checkColors();
});

function collisionDetectX() {
    if (x < 0) {
        x = 0;
    } else if (x > 1200) {
        x = 1200;
    }
}

function collisionDetectY() {
    if (y < 0) {
        y = 0;
    } else if (y > 600) {
        y = 600;
    }
}

function checkColors() {
    switch (x) {
        case 0:
            changeProperties("#030303", "#aaa5a5", true);
            break;
        case 200:
            changeProperties("#de3226", "#c94940");
            // changeSas();
            break;
        case 400:
            changeProperties("#f57011", "#d6752f");
            break;
        case 600:
            changeProperties("#e6bc17", "#c94940");
            break;
        case 800:
            changeProperties("#71e617", "#75c23a");
            break;
        case 1000:
            changeProperties("#196dd4", "#39608f");
            break;
        case 1200:
            changeProperties("#582cb8", "#46346e");
    }
}

function changeProperties(colorMain, colorShadow, start = false) {
    text.style.color = colorMain;
    text.style.textShadow = colorShadow + " 0px 0px 10px";
    game.style.border = colorMain + " 5px solid";
    game.style.boxShadow = colorShadow + " 0px 0px 20px";
    if (start) {
        game.style.border = "#333030 5px solid";
    }
}

// function changeSas() {
//     switch (y) {
//         case 0:
//             break;
//         case 200:
//             changeProperties("#8a1e16", "#87312b");
//             break;
//     }
// }