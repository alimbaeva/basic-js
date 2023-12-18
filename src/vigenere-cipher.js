const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(invert = true) {
    this.invert = invert;
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.alphabetLength = this.alphabet.length;
    this.spaceIndexes = [];
  }
  encrypt(str, key) {
    if (!str || !key) throw Error("Incorrect arguments!");
 
    const word = this.dellSpace(str);
 
    let encryptedText ='';
 
    for(let i = 0; i < word.length; i++) {
      const strChar = word.toUpperCase().charCodeAt(i) - 65;
      const keyChar = key.toUpperCase().charCodeAt(i % key.length) - 65;
      
      if (strChar >= 0 && strChar <= 25) {
        const indEncode = (strChar + keyChar + this.alphabetLength) % this.alphabetLength
        encryptedText += this.alphabet[indEncode];
      } else {
        encryptedText += word[i];
      }
    }
 
    const result = this.setSpace(encryptedText);
    return result;
  }
  decrypt(str, key) {
    if (!str || !key) throw Error("Incorrect arguments!");
 
    const word = this.dellSpace(str);
    
    let decryptedText = '';
 
    for (let i = 0; i < word.length; i++) {
      const strChar = word.toUpperCase().charCodeAt(i) - 65;
      const keyChar = key.toUpperCase().charCodeAt(i % key.length) - 65;
 
      if (strChar >= 0 && strChar <= 25) {
        const indDecode = (strChar - keyChar + this.alphabetLength) % this.alphabetLength;
        decryptedText += this.alphabet[indDecode];
      } else {
        decryptedText += word[i];
      }
    }
 
    const result = this.setSpace(decryptedText);
    return result;
  }
 
  dellSpace(str) {
     let currentIndex = str.indexOf(' ');
 
     while (currentIndex !== -1) {
       this.spaceIndexes.push(currentIndex);
       currentIndex = str.indexOf(' ', currentIndex + 1);
     }
   
     return str.replace(/\s/g, '');
  }
 
  setSpace(str) {
     let strArr = str.split('');
 
     this.spaceIndexes.forEach(index => {
         strArr.splice(index, 0, ' ');
     });
   
     this.spaceIndexes = [];
     return this.invert ? strArr.join('') : strArr.reverse().join('');
  }
 
 }

module.exports = {
  VigenereCipheringMachine
};
