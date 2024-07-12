let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#uscore");
const compScorePara=document.querySelector("#cscore");

const drawGame=()=>{
    console.log("Game was draw")
    msg.innerText="YOU DRAW THE GAME";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userwin,userchoice,compChoice)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("YOU WIN");
        msg.innerText=`YOU WIN! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("COMP WILL BE WIN");
        msg.innerText=`YOU lost! Your ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor="Red";
    }
}

const gencompchoice=()=>{
    const option=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}
const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compChoice=gencompchoice();
    console.log("comp choice=",compChoice);

    if(userchoice===compChoice){
        //Draw game
        drawGame();
    }
    else{
        userwin=true;
        if(userchoice==="rock"){
            //scissor.paper
            //true means user win
            userwin=compChoice==="paper"?false:true
        }
        else if(userchoice=="paper"){
            //rock,scissor
            userwin=compChoice==="scissors"?false:true;
        }
        else {
            //rock,paper
            userwin=compChoice==="rock"?false:true;
        }

        showWinner(userwin,userchoice,compChoice);
    }
};


console.log(choices);
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked",userchoice)
        playgame(userchoice);

    });
});
