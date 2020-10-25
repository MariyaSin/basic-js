const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {

  if (!Array.isArray(array)){
    return false;
  }
  let abc = array.reduce(function(x, item){
    if (typeof(item) === 'string') {
      let i = 0;
      while (item[i] === ' ') {
        i ++;
      }
      x += item[i];
    }
    return x;
 }, '');
 return abc.toUpperCase().split('').sort().join('');
};
