const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == '-') {
      if (arr[i] === '--discard-prev' && i > 0) {
        ans.pop();
      }
      if (arr[i] === '--double-prev' && i > 0) {
        ans.push(arr[i-1]);
      }
      if (arr[i] === '--double-next' && i < arr.length - 1) {
        ans.push(arr[i+1]);
      }
      if (arr[i] == '--discard-next' && i < arr.length - 1){
        arr[i+2] == '--double-prev' || arr[i+2] == '--discard-prev' ? (i += 2) : i ++;
      } 
    } else {
      ans.push(arr[i]);
    }
  }
  return ans;
};
