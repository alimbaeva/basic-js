const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) { return str }
  str = str.split('')
  let len = '';

  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    for (let y = 0; y < str.length; y++) {
      if (str[0] === str[y]) {
        count++
      } else {

        break
      }

    }
    len += count - 1 === 0 || count === 0 ? str[0] : count + str[0]
    str.splice(0, count)
    count = 0
    i = 0

  }
  return len



  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


module.exports = {
  encodeLine
};
