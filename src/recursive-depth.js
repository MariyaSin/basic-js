const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr) {
    let sweatcher = false;
    let deep = 1;

    point: for (let i = 0; i < arr.length && sweatcher == false; i++) {
      if (Array.isArray(arr[i])) {
        sweatcher = true;
        break point;
      }
    }
    return sweatcher ? (deep = this.calculateDepth(arr.flat(1)) + 1): deep;
  }
}