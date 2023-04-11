const playBoard = document.querySelector(".play-board");
let foodX, foodY;
let snakeX=10, snakeY=13;
let velocityX=0, velocityY=0;

const changeFoodPosition=()=>{
    foodX= Math.floor(Math.random()*30)+1;
    foodY= Math.floor(Math.random()*30)+1;
}

const changeDirection= (e)=>{
    if(e.key==="ArrowLeft"){
        velocityX=0;
        velocityY= -1;
    }else if(e.key==="ArrowRight"){
        velocityX=0;
        velocityY= 1;
    }else if(e.key==="ArrowUp"){
        velocityX= -1;
        velocityY= 0;
    }else if(e.key==="ArrowDown"){
        velocityX=1;
        velocityY= 0;
    }
    initGame();
}

const initGame = ()=>{
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"> </div>`;

    snakeX+=velocityX;
    snakeY+=velocityY;
    htmlMarkup += `<div class="head" style="grid-area: ${snakeX} / ${snakeY}"> </div>`;
    playBoard.innerHTML= htmlMarkup;
}
changeFoodPosition();
setInterval(initGame,125)
initGame();

document.addEventListener("keydown", changeDirection)
