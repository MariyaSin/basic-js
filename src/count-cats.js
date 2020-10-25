const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  throw new CustomError('Not implemented');
  /*if (arr.length == 0){
    return 0;
  }
  arr = arr.flat(Infinity);
  return arr.reduce(function (s, elem){
    if (typeof elem == String && elem == '^^'){
      return s++;
    }
    return s;
  }, 0)*/
};
