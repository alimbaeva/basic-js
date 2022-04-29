const { NotImplementedError } = require('../extensions/index.js');

/**
 * Смотрите вот сюда
const instance = new DepthCalculator();
const calculateDepth = instance.calculateDepth.bind(instance);

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind 

 * 
 * 
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {

  count = 0;
  countArray = 0;

  calculateDepth(arr) {


    this.count === 0 ? this.countArray = 0 : null;

    this.count++;
    for (let el of arr) {
      if (Array.isArray(el)) {
        this.calculateDepth(el);
      }
    }
    this.countArray = this.countArray > this.count ? this.countArray : this.count
    this.count--;
    return this.countArray;
  }
}


module.exports = {
  DepthCalculator
};
