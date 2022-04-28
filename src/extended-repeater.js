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
 */
function repeater(str, options) {
  const str1 = typeof str === 'string' ? str : String(str);
  const addition1 = String(options.addition) !== 'undefined' ? typeof options.addition === 'string' ? options.addition : String(options.addition) : null;
  const repeatTimes1 = options.repeatTimes ? options.repeatTimes : 1;
  const additionRepeatTimes1 = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  const separator1 = options.separator ? options.separator : '+';
  const additionSeparator1 = options.additionSeparator ? options.additionSeparator : '|';


  if (addition1) {
    let additionRep = Array(additionRepeatTimes1).fill(addition1);
    let additionRep2 = '';
    for (let i = 0; i < additionRep.length; i++) {
      i === additionRep.length - 1 ? additionRep2 += `${additionRep[i]}` : additionRep2 += `${additionRep[i]}${additionSeparator1}`;
    }

    let strRep = Array(repeatTimes1).fill(str1 + additionRep2);
    let strRep2 = '';
    for (let i = 0; i < strRep.length; i++) {
      i === strRep.length - 1 ? strRep2 += `${strRep[i]}` : strRep2 += `${strRep[i]}${separator1}`;
    }
    return strRep2;
  }



  let strRep = Array(repeatTimes1).fill(str1);
  let strRep2 = '';
  for (let i = 0; i < strRep.length; i++) {
    i === strRep.length - 1 ? strRep2 += `${strRep[i]}` : strRep2 += `${strRep[i]}${separator1}`;

  }

  return strRep2









  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


module.exports = {
  repeater
};
