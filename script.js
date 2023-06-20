console.log("Welcome to tic tac toe")
let music=new Audio("music.mp3")
let audioturn=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let turn= "X";
let isgameover=false;

//function for turn
const changeturn=()=>{
    return turn==="X"?"O":"X"
}

//function for checking win
const checkWin=()=>{
    let box=document.getElementsByClassName("box");
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]

    wins.forEach(e =>{
        if((box[e[0]].innerText===box[e[1]].innerText) && (box[e[2]].innerText===box[e[1]].innerText) && (box[e[0]].innerText!=="")){
        document.querySelector('.info').innerText=box[e[0]].innerText + "  Won"
        isgameover=true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
        document.querySelector('.line').style.transform=`translate( ${e[3]}vw, ${e[4]}vw ) rotate(${e[5]}deg)`
        document.querySelector('.line').style.width="20vw";
        }
    })

}

//main
let blocks=document.getElementsByClassName("block");
Array.from(blocks).forEach(element =>{
    let box=element.querySelector('.box');
    element.addEventListener('click',()=>{
        if(box.innerText===''){
            box.innerText=turn;
            turn=changeturn();
            audioturn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
            }
        }
    })

})

//for reset button
reset.addEventListener('click',()=>{
    let box=document.querySelectorAll('.box');
    Array.from(box).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0";
    document.querySelector('.line').style.width="0";
})