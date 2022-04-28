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
  let nambersBegen = String(n).split('');
  let namber = [];

  for (let i = 0; i < nambersBegen.length; i++) {
    let n = ''
    for (let y = 0; y < nambersBegen.length; y++) {
      if (i !== y) {
        n += nambersBegen[y]
      }
    }
    namber.push(Number(n))
  }
  let mainNamber = namber.sort((a, b) => a - b)
  return mainNamber[mainNamber.length - 1]


  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
