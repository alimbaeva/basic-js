const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 * 
 * https://stackoverflow.com/questions/34937349/javascript-create-empty-array-of-a-given-size
 * https://medium.com/@olga.myazina/5-способов-создать-массив-в-javascript-602dc27fd20
 * 
 * fill => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
 */
function repeater(str, options) {
  const str1 = String(str);
  const addition1 = String(options.addition) !== 'undefined' ? String(options.addition) : '';
  const repeatTimes1 = options.repeatTimes || 1;
  const additionRepeatTimes1 = options.additionRepeatTimes || 1;
  const separator1 = options.separator || '+';
  const additionSeparator1 = options.additionSeparator || '|';

  const additionRep = Array(additionRepeatTimes1).fill(addition1).join(additionSeparator1); // Array(3) => [ , , ,].fill('oo') => ['oo', 'oo', 'oo'].join('+') => "oo+oo+oo";
  const strRep = Array(repeatTimes1).fill(str1 + additionRep).join(separator1);

  return strRep;
}

module.exports = {
  repeater
};
