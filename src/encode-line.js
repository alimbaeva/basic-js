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
  if (!str) return str;
  const regex = /(.)\1*/g;
  const matches = str.match(regex);
  let strings = '';
  matches.forEach(el => strings += `${el.length === 1 ? '' : el.length}${el[0]}`);
  return strings;
}


module.exports = {
  encodeLine
};
