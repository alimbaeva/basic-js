const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let mainArr = []

  for (let i = 0; i < matrix.length; i++) {

    let arrEl = []
    for (let y = 0; y < matrix[i].length; y++) {
      let el = 0;
      if (matrix[i - 1] !== undefined) {
        matrix[i - 1][y] === true ? el++ : el += 0;
        if (matrix[i - 1][y - 1] !== undefined) {
          matrix[i - 1][y - 1] === true ? el++ : el += 0;
        }
        if (matrix[i - 1][y + 1] !== undefined) {
          matrix[i - 1][y + 1] === true ? el++ : el += 0;
        }
      }
      if (matrix[i][y - 1] !== undefined) {
        matrix[i][y - 1] === true ? el++ : el += 0;
      }
      if (matrix[i][y + 1] !== undefined) {
        matrix[i][y + 1] === true ? el++ : el += 0;
      }
      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][y + 1] !== undefined) {
          matrix[i + 1][y + 1] === true ? el++ : el += 0;
        }
        if (matrix[i + 1][y - 1] !== undefined) {
          matrix[i + 1][y - 1] === true ? el++ : el += 0;
        }
        if (matrix[i + 1][y] !== undefined) {
          matrix[i + 1][y] === true ? el++ : el += 0;
        }
      }
      arrEl.push(el)
    }
    mainArr.push(arrEl);
  }
  // console.log(mainArr)
  return mainArr;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


module.exports = {
  minesweeper
};
