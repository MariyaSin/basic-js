const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machine = 'true') {
    this.machine = machine;
  }
  
  encrypt(mes, key) {
    let len = mes.length;
    let ans = '';
    let i = 0; 
    let j = 0;

    while (len--) {
      !/[a-zA-Z]/.test(mes[i]) ? (ans += mes[i], ++j) :
      ans += String.fromCharCode((mes[i].toUpperCase().charCodeAt() + key[(i - j) % key.length].toUpperCase().charCodeAt() - 130) % 26 + 65);
      ++i;
    }
    return this.machine ? ans : ans.split('').reverse().join('');
  }    
  decrypt(mes, key) {
    let len = mes.length;
    let ans = '';
    let i = 0; 
    let j = 0;
    
    while (len--) {
      !/[a-zA-Z]/.test(mes[i]) ? (ans += mes[i], ++j) :
      ans += String.fromCharCode(((mes[i].toUpperCase().charCodeAt() - key[(i - j) % key.length].toUpperCase().charCodeAt()) + 26) % 26 + 65);
      ++i;
    }
    return this.machine ? ans : ans.split('').reverse().join('');
  }
}
module.exports = VigenereCipheringMachine;