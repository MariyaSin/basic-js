const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  let time = Math.log2(MODERN_ACTIVITY/sampleActivity) / (0.693/HALF_LIFE_PERIOD);
  return (time > 0) && (time != Infinity) ? time: false;
};
