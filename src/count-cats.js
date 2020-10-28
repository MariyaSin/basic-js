const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  if (arr.length == 0){
    return 0;
  }
  arr = arr.flat(Infinity);
  return arr.reduce(function (s, elem) {
    return (typeof elem == 'string' && elem == '^^' ? (s += 1): s);
  }, 0)
};
