const reset = document.getElementById('reset');
const roll = document.getElementById('roll');
const diceImg = document.getElementById('img');
const hold = document.getElementById('hold');
const playerOneBackground = document.querySelector(".player-1-section");
const playerTwoBackground = document.querySelector(".player-2-section");
let total1 = document.getElementById('score-0');
let total2 = document.getElementById('score-1');
let player1Score = document.getElementById('current-score-0');
let player2Score = document.getElementById('current-score-1');
let playerChoice = 0;
let totalScore =[0,0];
let currentScore = [0,0];
let totalTotalScore = [0,0];
function diceRoll(){
    var random= Math.floor((Math.random()*6)+1);
    return random;
} 

function background(){
    if (playerChoice == 0){
        playerTwoBackground.style.border = "none";
        playerOneBackground.style.border = "thick solid black";
    }
    else {
        playerOneBackground.style.border = "none";
        playerTwoBackground.style.border = "thick solid black";
    }
    if (totalScore[0] >= 20 || currentScore[0]>=20 || totalTotalScore[0]>=20){
        document.getElementById("player-0").innerHTML = 'WINNER'; 
        document.getElementById("player-1").innerHTML = 'GARBAGE';
    }else if (totalScore[1] >= 20 || currentScore[1]>=20 || totalTotalScore[1]>=20){
        document.getElementById("player-1").innerHTML = 'WINNER';
        document.getElementById("player-0").innerHTML = 'GARBAGE';
    }
}
background();

hold.addEventListener('click', ()=>{ 
    if (playerChoice == 0){
         playerChoice = 1;
         totalScore[0]= currentScore[0] + totalScore[0];
         total1.innerHTML = totalScore[0];
         player1Score.innerHTML = "0";
         currentScore[0]=0;
    }else if (playerChoice ==1){
        playerChoice = 0;
        totalScore[1]= totalScore[1] +currentScore[1];
        total2.innerHTML = totalScore[1];
        player2Score.innerHTML = "0";
        currentScore[1]=0;
    }
background();

})

roll.addEventListener('click', ()=>{
    let result = diceRoll();
      totalTotalScore = totalScore + currentScore; 
    diceImg.style.visibility= "visible";
    diceImg.src = 'img/dice' + result + '.png'

    if (playerChoice == 0){
        function print(number){
    currentScore[0] = currentScore[0]+number;
    player1Score.innerHTML =  currentScore[0];      
}print(result);
   } else {
       function print(number){
    currentScore[1] = currentScore[1]+number;
    player2Score.innerHTML =  currentScore[1];            
}print(result);
} 
if (result == 1 && playerChoice == 0){
    playerChoice = 1; 
    total1.innerHTML = totalScore[0];
    player1Score.innerHTML = "0";
    currentScore[0]=0;
}else if(result == 1 && playerChoice == 1){
    playerChoice = 0;
    total2.innerHTML = totalScore[1];
    player2Score.innerHTML = "0";
    currentScore[1]=0;
}else if (totalScore[0] >= 20 || currentScore[0]>=20 || totalTotalScore[0]>=20){
    document.getElementById("player-0").innerHTML = 'WINNER'; 
    document.getElementById("player-1").innerHTML = 'GARBAGE';
}else if (totalScore[1] >= 20 || currentScore[1]>=20 || totalTotalScore[1]>=20){
    document.getElementById("player-1").innerHTML = 'WINNER';
    document.getElementById("player-0").innerHTML = 'GARBAGE';
}
background();
})
function winner (){
    
}
winner();

reset.addEventListener('click',()=>{
    location.reload();
}) 


  