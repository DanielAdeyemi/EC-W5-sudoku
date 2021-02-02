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
  return "true";
};