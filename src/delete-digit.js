const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nambersArr = String(n).split('').map(Number);

  const modifiedNumbersArr = nambersArr.map((num, index) => {
    const clonedArray = nambersArr.slice();
    clonedArray.splice(index, 1);
    return Number(clonedArray.join(''));
  });

  return Math.max(...modifiedNumbersArr);
}

module.exports = {
  deleteDigit
};
