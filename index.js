var board = $("#board");
var box = $(".box");
var players =["X","0"];
var currentPlayer=players["X"];
var message=document.createElement("h2");
message.textContent="X's turn";
message.style.marginTop="30px";
message.style.fontSize="30px";
message.style.textAlign="center";
board.after(message);

var winning_combinations=[
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

for(let i = 0; i < box.length; i++){
  box[i].addEventListener('click',function ()  {
      if(box[i].textContent !== ''){
          return
      }
      box[i].textContent = currentPlayer
      if(checkWin(currentPlayer)) {
          message.textContent=`Game over! ${currentPlayer} wins!`;
          $("#board").children().attr('disabled', true);
          return
      }
      if(checkTie()) {
          message.textContent= `Game is tied!`
          return
      }
      currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0] 
      if(currentPlayer == players[0]) {
          message.textContent= `X's turn!`
      } else {
          message.textContent= `O's turn!`
      }     
  })   
}

function checkWin(currentPlayer) {
  for(let i = 0; i < winning_combinations.length; i++){
      const [a, b, c] = winning_combinations[i]
      if(box[a].textContent === currentPlayer && box[b].textContent === currentPlayer && box[c].textContent === currentPlayer){
          return true
      }
  }
  return false
}

function checkTie(){
  for(let i = 0; i < box.length; i++) {
      if(box[i].textContent === '') {
          return false;
      }
  }
  return true
}

function resetButton() {
 
  message.textContent=`X's turn!`
  currentPlayer = players[X]
}
document.getElementById("reset").addEventListener("click",function(){
  location. reload();
});
