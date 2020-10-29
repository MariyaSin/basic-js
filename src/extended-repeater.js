const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  
  let rep = options['repeatTimes'] || 1;
  let sep = options['separator']  || '+';
  let add = typeof options['addition'] === "undefined" ? '': String (options['addition']);
  let addRep = options['additionRepeatTimes'] || 1;
  let addSep = options['additionSeparator'] || '';

  return (str + ((add + addSep).repeat(addRep - 1) + add) + sep).repeat(rep - 1) + 
          (str + (add + addSep).repeat(addRep - 1) + add); 
  

};
  