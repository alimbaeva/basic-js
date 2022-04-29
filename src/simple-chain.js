const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  strLen: '',
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    // console.log(value)
    if (String(value) !== 'undefined') {
      this.strLen += this.strLen.length !== 0 ? `~~( ${String(value)} )` : `( ${String(value)} )`
    } else {
      this.strLen += ' ( ) '
    }
    // console.log(this.strLen)
    return chainMaker;

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (typeof position === 'number' && Number.isInteger(position) && position > 0 && this.strLen.split('~~').length >= position) {
      let arrRev = this.strLen.split('~~')
      arrRev.splice(position - 1, 1);
      this.strLen = arrRev.join('~~');
      return chainMaker;
    } else {
      // let main = this.strLen
      this.strLen = '';
      throw new Error("You can't remove incorrect link!");
    }

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    let arrRev = this.strLen.split('~~')
    this.strLen = arrRev.reverse().join('~~')
    // console.log(this.strLen)
    return chainMaker;

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let main = this.strLen
    this.strLen = '';
    return main
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};


module.exports = {
  chainMaker
};
