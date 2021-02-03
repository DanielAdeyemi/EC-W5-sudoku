// [[4,2,6,5,7,1,3,9,8],
// [8,5,7,2,9,3,1,4,6],
// [1,3,9,4,6,8,2,7,5],
// [9,7,1,3,8,5,6,2,4],
// [5,4,3,7,2,6,8,1,9],
// [6,8,2,1,4,9,7,5,3],
// [7,9,4,6,3,2,5,8,1],
// [2,6,5,8,1,4,9,3,7],
// [3,1,8,9,5,7,4,6,2]]

export default function Sudoku(array) {
  this.row0 = array[0];
  this.row1 = array[1];
  this.row2 = array[2];
  this.row3 = array[3];
  this.row4 = array[4];
  this.row5 = array[5];
  this.row6 = array[6];
  this.row7 = array[7];
  this.row8 = array[8];
}

Sudoku.prototype.checkRow = function() {
  let row0 = this.row0;
  let row1 = this.row1;
  let row2 = this.row2;
  let row3 = this.row3;
  let row4 = this.row4;
  let row5 = this.row5;
  let row6 = this.row6;
  let row7 = this.row7;
  let row8 = this.row8;

  let sum0 = 0;
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  let sum4 = 0;
  let sum5 = 0;
  let sum6 = 0;
  let sum7 = 0;
  let sum8 = 0;

  for (let i = 0; i < 9; i++) {
    sum0 += row0[i];
    sum1 += row1[i];
    sum2 += row2[i];
    sum3 += row3[i];
    sum4 += row4[i];
    sum5 += row5[i];
    sum6 += row6[i];
    sum7 += row7[i];
    sum8 += row8[i];
  }

  let sumAll = sum0 + sum1 + sum2 + sum3 + sum4 + sum5 + sum6 + sum7 + sum8;
  if (sumAll === 405) {
    return "true";
  } else {
    return "false";
  }
  // for (let i = 0; i < 9; i++) {
  //   let sum = 0;
  //   let row = this.rowi;
  //   for (let j = 0; j < 9; j++) {
  //     sum += row[i][j];
  //   }
  //   if (sum !== 45) {
  //     return "false";
  //   } else {
  //     continue;
  //   }
  // }
  // return "true";
};