const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const RATE_CONSTANT = 0.693;


module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) === 'string') {
    sampleActivity = parseFloat(sampleActivity);
    if (!Number.isNaN(sampleActivity) && sampleActivity > 0 && sampleActivity <=15) {
    let number = (Math.log(MODERN_ACTIVITY/sampleActivity))/(RATE_CONSTANT/HALF_LIFE_PERIOD);
    return(Math.ceil(number)); 
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}
