console.log('hello from your app.js page')

var array = [[0,0,0],[0,0,0],[0,0,0]]
var player = true
var boxes = document.getElementsByClassName('box')
var win = false
var scoreArray = []
var p1Score = 0;
var p2Score = 0;
var p1Name ='O'
var p2Name ='X'
var count = 0;

var resetButton = document.getElementById('reset-button')
resetButton.onclick = function (){
  console.log('this button resets')
  array = [[],[],[]]
  win = false
  count = 0;
  player = !player
  for (var m = 0; m <boxes.length; m++){
    boxes[m].innerHTML = ' ';
  }
}


var submitButton = document.getElementById('submit-button')

submitButton.onclick = function (){
  event.preventDefault()
  p1Name = document.getElementsByName('player1')[0].value
  p2Name = document.getElementsByName('player2')[0].value

  document.getElementsByClassName('sb-name1')[0].innerHTML = p1Name;
  document.getElementsByClassName('sb-name2')[0].innerHTML = p2Name;

  console.log('submit button was clicked!')
}

let current;

for (var i = 0;i <boxes.length; i++) {
  boxes[i].addEventListener('click', function (e){
    current = e.target.id
    let row = current[0];
    let col = current[1]
    if (!array[row][col]&&!win){

      player?  e.target.innerHTML = p1Name : e.target.innerHTML = p2Name

      player = !player;
      count++;
      arrTable(current)
    }
  })

}


const arrTable = (current) => {
  let row = current[0];
  let col = current[1]
  let val;

  player? val = 1 : val =10;
  array[row][col] = val
  check(row,col)
}


let p1 = document.getElementsByClassName('p1-score')
let p2 = document.getElementsByClassName('p2-score')




const check = (row,col) => {
  let sumRow = 0;
  let sumCol = 0;
  let sumDiag = 0;
  let sumMinDiag = 0;

  for (let i = 0; i <3; i++) {
    sumCol += array[i][col]
    sumRow +=array[row][i]
    sumDiag +=array[i][i]
    sumMinDiag += array[2-i][i]
  }


  if(sumRow===3 || sumCol ===3 || sumDiag === 3 || sumMinDiag === 3){
    win = true
    p1Score++;
    scoreArray.push('Player 1')
    scoreBoard()
  } else if (sumRow === 30 || sumCol === 30 || sumDiag === 30 || sumMinDiag === 30) {
    win = true
    p2Score++;
    scoreArray.push('Player 2')
    scoreBoard()
  }
  if(count === 9) {
    alert('its a tie!')
  }
}

const scoreBoard = () => {
  if(player){
    p1[0].innerHTML = p1Score
  } else {
    p2[0].innerHTML = p2Score
  }
}
