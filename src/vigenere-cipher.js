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
  }
  encrypt(str, key) {
    if (!str || !key) throw Error("Incorrect arguments!");

    let encryptedText ='';

    for(let i = 0; i < str.length; i++) {
      const strChar = str.toUpperCase().charCodeAt(i) - 65;
      const keyChar = key.toUpperCase().charCodeAt(i % key.length) - 65;
      
      if (strChar >= 0 && strChar <= 25) {
        const indEncode = (strChar + keyChar + this.alphabetLength) % this.alphabetLength
        encryptedText += this.alphabet[indEncode];
      } else {
        encryptedText += str[i];
      }
    }

    return this.invert ? encryptedText : encryptedText.split('').reverse().join('');
  }
  decrypt(str, key) {
    if (!str || !key) throw Error("Incorrect arguments!");
    
    let decryptedText = '';

    for (let i = 0; i < str.length; i++) {
      const strChar = str.toUpperCase().charCodeAt(i) - 65;
      const keyChar = key.toUpperCase().charCodeAt(i % key.length) - 65;

      if (strChar >= 0 && strChar <= 25) {
        const indDecode = (strChar - keyChar + this.alphabetLength) % this.alphabetLength;
        decryptedText += this.alphabet[indDecode];
      } else {
        decryptedText += str[i];
      }
    }

    return this.invert ? decryptedText : decryptedText.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
