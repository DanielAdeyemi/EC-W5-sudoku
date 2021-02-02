import Sudoku from '../src/sudoku.js';

describe('Sudoku', () => {

  test('sudoku test', () => {
    const triangle = new Sudoku(2, 4, 5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });
});