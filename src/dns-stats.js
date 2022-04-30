const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */


function getDNSStats(domains) {
  let obj = {};
  for (let i = 0; i < domains.length; i++) {
    let domLen = domains[i].split('.').reverse();
    let domLen1 = [];
    let name = ''
    for (let y = 0; y < domLen.length; y++) {
      if (y === 0) {
        domLen1.push(`.${domLen[y]}`)
      } else {
        for (let q = 0; q <= y; q++) {
          name += `.${domLen[q]}`
        }
        domLen1.push(name);
        name = ''
      }
    }

    for (let key of domLen1) {
      if (obj[key]) {
        obj[key]++;
      } else {
        obj[key] = 1;
      }
    }
  }
  return obj
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


module.exports = {
  getDNSStats
};
