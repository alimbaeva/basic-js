const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let namberDel;
  if (typeof sampleActivity !== 'string') { return false }
  if (isNaN(sampleActivity)) {
    return false
  } else {
    namberDel = Number(sampleActivity);
    if (namberDel <= 0 || namberDel > 15) {
      return false
    }
  }


  let mainNumber = Math.ceil(Math.log(MODERN_ACTIVITY / namberDel) / (.693 / HALF_LIFE_PERIOD));
  return mainNumber;


  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
