const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function getSumOfDigits(n) {
  let r = n;

  while (String(r).length !== 1) {
    let r2 = 0;
    let strNum = String(r).split('');
    strNum.forEach((el) => {
      r2 += Number(el)
    })
    r = r2;
  }
  return r;
}

module.exports = {
  getSumOfDigits
};
