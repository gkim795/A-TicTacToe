console.log('hello from your app.js page')

var array = [[],[],[]]
var player = true
var boxes = document.getElementsByClassName('box')
var win = false
var scoreArray = []
var p1Score = 0;
var p2Score = 0;

var resetButton = document.getElementById('reset-button')
resetButton.onclick = function (){
  console.log('this button resets')
  array = [[],[],[]]
  win = false
  player = !player
  for (var m = 0; m <boxes.length; m++){
    boxes[m].innerHTML = ' ';
  }
}


let current;

for (var i = 0;i <boxes.length; i++) {
  boxes[i].addEventListener('click', function (e){
    current = e.target.id
    let row = current[0];
    let col = current[1]
    if (!array[row][col]&&!win){

      player?  e.target.innerHTML = 'X' : e.target.innerHTML = 'O'

      player = !player;
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
  

  checkRow(row,col)
  // checkCol(col)
  // checkDiag()
  scoreBoard()
}


let p1 = document.getElementsByClassName('p1-score')
console.log(p1)
let p2 = document.getElementsByClassName('p2-score')




const checkRow = (row,col) => {
  let sumRow = 0
  let sumCol = 0
  let sumDiag = 0;

  for (i in array) {
    sumCol += array[i][col]
    sumRow +=array[row][i]
    sumDiag +=array[i][i]
  }

  console.log(sumRow, sumCol, sumDiag)

  if(sumRow===3 || sumCol ===3 || sumDiag === 3){
    p1Score++;
    win = true
    scoreArray.push('Player 1')
  } else if (sumRow === 30 || sumCol === 3 || sumDiag === 3) {
    p2Score++;
    win = true
    scoreArray.push('Player 2')
  }

console.log(array)
}

// const checkCol = (col) => {
//   let sum = 0
//   for (i in array) {
//     sum += array[i][col]
//   }

//   if(sum===3){
//     p1Score++;
//     win = true
//     scoreArray.push('Player 1')

//   } else if (sum === 30) {
//     p2Score++;
//     win = true
//     scoreArray.push('Player 2')
//   }
// }

// const checkDiag = () => {
//   let sum = 0;
//   for (i in array) {
//     sum +=array[i][i]
//   }

//   if(sum===3){
//     p1Score++;
//     win = true
//     scoreArray.push('Player 1')
//   } else if (sum === 30) {
//     p2Score++;
//     win = true
//     scoreArray.push('Player 2')
//   }

// }

const scoreBoard = () => {
  if(win){
    if(player){
      p1[0].innerHTML = p1Score
      console.log(p1[0].innerHTML)
    } else {
      p2[0].innerHTML = p1Score
    }
  }
}
