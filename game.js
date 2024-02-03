// let gameseq = [];
// let userseq = [];

// let level = 0;
// let started = false;



// let h2 = document.querySelector("h2");

// document.addEventListener("keypress",function(){
//     if(started==false)
//     {
//         console.log("Game Started");
//         started = true;
//         levelUp();
//     }
    
//  });

//  function levelUp(){
//     level++;
//     h2.innerText = `Level ${level}`;

//     btnflash();
//  }


//  function btnflash(){
//     btnflash.classList.add("flash");

//     setTimeout(function(){
//         btn.classList.remove("flash");
//     },1000);
//  }

let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

let btns = ["greencol","yellowcol","bluecol","greencol"];

document.addEventListener("keypress",function(){
    if(started==false)
    {
        console.log("Game Started");
        started = true;
        levelUP();  
    }
});

function levelUP(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // random btn choose
    let randIdx = Math.floor(Math.random()*3);
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    gamebtnFlash(randBtn);
}

function gamebtnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userbtnFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn)
{
    btn.addEventListener("click",btnPress);
}

function btnPress()
{
    let btn = this;
    userbtnFlash(btn);

    userColour = btn.getAttribute("id");
    userSeq.push(userColour);

    checkAns(userSeq.length-1);
}

function checkAns(idx){
    if(gameSeq[idx]==userSeq[idx])
    {
        if(gameSeq.length==userSeq.length)
        {
           setTimeout(levelUP,1000);
        }
    }
    else{
        let body = document.querySelector("body");
        
        h2.innerHTML = `Game Over!! Your Score was <b>${level}</b> Press any key to start`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function reset(){
    userSeq = [];
    started = false;
    gameSeq = [];
    level = 0;
}
