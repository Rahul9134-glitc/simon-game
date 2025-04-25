let GameSeq = [];
let UserSeq = [];
let btns = ["yellow" , "red" , "green" ,"purple"];

let started = false;
let level = 0;
let h3 = document.querySelector("h3"); 

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game is start");
        started = true;

        levelUp();
    }
});

function gameflash(button){
  button.classList.add("flash");
  setTimeout(()=>{
    button.classList.remove("flash");
  },250);
}   
function userflash(button){
  button.classList.add("userflash");
  setTimeout(()=>{
    button.classList.remove("userflash");
  },250);
}   

function levelUp(){
  UserSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random()*3) ;
    let RandomColors= btns[randomIdx];
    let randomBtn = document.querySelector(`.${RandomColors}`);
    GameSeq.push(RandomColors);
    console.log(GameSeq);
    gameflash(randomBtn);
}
function checkAns(idx){
  if(UserSeq[idx] == GameSeq[idx]){
    if(UserSeq.length == GameSeq.length){
      setTimeout(levelUp , 1000);
    }
  }else{
    h3.innerHTML = `Game is Over !<b>your score is ${level}</b><br> Press any key to start the game.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(()=>{
      document.querySelector("body").style.backgroundColor = "white";
    },150);
    ResetGame();
  }
}

function buttonpress(){
  let btn = this;
  userflash(btn);
  userColor = btn.getAttribute("id");
  UserSeq.push(userColor);
  checkAns(UserSeq.length -1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" , buttonpress);
}
function ResetGame(){
  started = false;
  GameSeq = [];
  UserSeq = [];
  level = 0;
}