/********************** check if sudoku solution is valid **********************/

const checkValid = (arr) => {
  let rightNum = [];
  for (i = 1; i < 10; i++) {
    rightNum.push(i);
  }
  judge = true;
  // check horizontally
  for (row = 0; row < 9; row++) {
    checkh = [...rightNum];
    for (col = 0; col < 9; col++) {
      index = checkh.indexOf(arr[row][col]);
      checkh.splice(index, index === -1 ? 0 : 1);
    }
    judge = judge && checkh.length === 0;
    if (!judge) {
      return false;
    }
  }

  // check vertically
  for (col = 0; col < 9; col++) {
    checkv = [...rightNum];
    for (row = 0; row < 9; row++) {
      index = checkv.indexOf(arr[row][col]);
      checkv.splice(index, index === -1 ? 0 : 1);
    }
    judge = judge && checkv.length === 0;
    if (!judge) {
      return false;
    }
  }

  // check local divisions
  for (i = 0; i < 3; i++) {
    checkl = [...rightNum];
    for (j = 0; j < 3; j++) {
      for (row = i * 3; row < (i + 1) * 3; row++) {
        for (col = j * 3; col < (j + 1) * 3; col++) {
          index = checkl.indexOf(arr[row][col]);
          checkl.splice(index, index === -1 ? 0 : 1);
        }
      }
    }
    judge = judge && checkl.length === 0;
    if (!judge) {
      return false;
    }
  }

  return judge;
};

trial = [
  [5, 3, 6, 4, 1, 2, 9, 8, 7],
  [4, 7, 9, 6, 8, 5, 1, 3, 2],
  [8, 2, 1, 9, 7, 3, 4, 5, 6],
  [9, 8, 7, 3, 4, 6, 5, 2, 1],
  [6, 5, 3, 1, 2, 7, 8, 4, 9],
  [2, 1, 4, 8, 5, 9, 7, 6, 3],
  [3, 4, 5, 7, 6, 1, 2, 9, 8],
  [1, 6, 8, 2, 9, 4, 3, 7, 5],
  [7, 9, 2, 5, 3, 8, 6, 1, 4],
];

console.log(checkValid(trial));

// const cube = {
//   row: null,
//   col: null,
//   num: null,
//   isSet: false,
// };

// var c = document.getElementById("GameBoard");
// var ctx = c.getContext("2d");

// ctx.beginPath();
// ctx.moveTo(0, 60);
// ctx.lineTo(540, 60);

// ctx.strokeStyle = "black";
// ctx.stroke();

// ctx.fillStyle = "green";
// ctx.fillRect(250, 250, 250, 250);

// ctx.fillStyle = "black";
// ctx.font = "30px monospace";
// for (i = 1; i < 10; i++) {
//   ctx.fillText(i.toString(), 20 + 60 * (i - 1), 40);
// }
