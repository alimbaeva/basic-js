const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // if (Array.isArray(arr) === false) {
  //   throw new Error("\'arr\' parameter must be an instance of the Array!");
  // }
  const nextDel = '--discard-next';
  const prevDel = '--discard-prev';
  const nextDub = '--double-next';
  const prevDub = '--double-prev';
  let arr2 = arr;
  let newArr = [];

  if (Array.isArray(arr)) {
    arr2.map((el, ind) => {
      if (el === nextDel) {
        arr2.splice(ind + 1, 1);

      } else if (el === prevDel) {
        typeof arr2[ind - 1] !== 'string' ? newArr.pop() : null;
      } else if (el === nextDub) {
        ind + 1 < arr2.length ? newArr.push(arr2[ind + 1]) : null;
      } else if (el === prevDub) {
        typeof arr2[ind - 1] !== 'string' && arr2[ind - 1] !== undefined ? newArr.push(arr2[ind - 1]) : null;
      } else {
        newArr.push(el)
      }
    })
    return newArr;
  } else {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}




module.exports = {
  transform
};
