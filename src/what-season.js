module.exports = function getSeason(date) {
  if (typeof(date) !== 'undefined') {
    let month = date.getMonth();
    if ((month >= 0 && month <= 1) || month == 11) {
      return 'winter';
    }
    else if (month >= 2 && month <= 4) {
      return 'spring';
    }
    else if (month >= 5 && month <= 7) {
      return 'summer';
    }
    else if (month >= 8 && month < 11) {
      return 'autumn';
    }
  }
  else {
    return('Unable to determine the time of year!');
  }
};
