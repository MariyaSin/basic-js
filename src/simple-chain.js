const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArr: [],

  getLength() {
    return this.chainArr.length();
  },
  addLink(value) {
    if (value !== undefined) {
      this.chainArr.push('( '+ value + ' )');
    }
    return this;
  },
  removeLink(position) {
    if (position > this.chainArr.length || position < 1) {
      this.chainArr = [];
      throw new Error();
    }
    this.chainArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    const str = this.chainArr.join('~~');
    this.chainArr = [];
    return str;
  }
};

module.exports = chainMaker;
