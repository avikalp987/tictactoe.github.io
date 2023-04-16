let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let gameStatus = false;

//function to change the turn
const changeTurn = ()=>{
    return turn==="X"?"0":"X";
}

//function to check the win
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName("boxText");
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ];
    wins.forEach((e,index)=>{
        if(((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText===boxtexts[e[2]].innerText)) && (boxtexts[e[0]].innerText!==""))
        {
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " Won";
            gameStatus = true;
            document.querySelector(".imageBox").getElementsByTagName("img")[0].style.width = "200px";
            document.querySelector(".line").style.width = "20vw";
           switch(index)
           {
            case 0:
                document.querySelector(".line").style.transform = "translate(5vw,5vw) rotate(0deg)";
                break;
            case 1:
                document.querySelector(".line").style.transform = "translate(5vw,15vw) rotate(0deg)";
                break;
            case 2:
                document.querySelector(".line").style.transform = "translate(5vw,25vw) rotate(0deg)";
                break;
            case 3:
                document.querySelector(".line").style.transform = "translate(-5vw,15vw) rotate(90deg)";
                break;
            case 4:
                document.querySelector(".line").style.transform = "translate(5vw,15vw) rotate(90deg)";
                break;
            case 5:
                document.querySelector(".line").style.transform = "translate(15vw,15vw) rotate(90deg)";
                break;
            case 6:
                document.querySelector(".line").style.transform = "translate(5vw,15vw) rotate(45deg)";
                break;
            case 7:
                document.querySelector(".line").style.transform = "translate(5vw,15vw) rotate(135deg)";
                break;
           }
        }
    })
}

const checkTie = ()=>
{
    let boxes = document.querySelector(".boxText");
    Array.from(boxes).forEach(e=>{
        if(e.innerText==="")
        return false;
    })
    return true;
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector(".boxText");
    element.addEventListener("click",()=>{
        if(!gameStatus)
        {
        if(boxtext.innerText==="")
        {
            boxtext.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if(!gameStatus)
            {
                document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
            }
            
        }
    }
    })
})
reset.addEventListener("click",()=>
{
    let boxtexts = document.querySelectorAll(".boxText");
    Array.from(boxtexts).forEach((element)=>{
        element.innerText = "";
    })
    turn = "X";
    gameStatus = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
    document.querySelector(".imageBox").getElementsByTagName("img")[0].style.width = "0";
    document.querySelector(".line").style.width = "0";
    
})