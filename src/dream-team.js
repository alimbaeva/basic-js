const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members === null || members === undefined) { return false }

  let name = '';
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      /\s/.test(members[i]) ? name += members[i].replace(/\s/g, '')[0] : name += members[i][0]
    }
  }
  let n2 = name.toUpperCase().split('').sort((a, b) => a.charCodeAt() - b.charCodeAt())
  return n2.join('')
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
module.exports = {
  createDreamTeam
};
