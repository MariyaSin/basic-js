const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor () {
    this.counter = 0;
    this.deep = 0
  }
  
  calculateDepth(arr) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here\
    
    /*for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'object') {
        this.deep += 1;
        return this.calculateDepth(arr);
      }
    }
    if (this.counter < this.deep) {
      this.counter = this.deep;
    };
    this.deep = 0;
    return this.counter;
    }*/
  }
}