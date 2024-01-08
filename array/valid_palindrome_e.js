//125
var isPalindrome = function (s) {
  let arr = s.toLowerCase().split("").filter(checkAlphaNum);
  function checkAlphaNum(charac) {
    // if ((charac>="a" && charac<="z") || (charac>=0 && charac<=9)) return true;
    return /^[a-zA-Z0-9]+$/.test(charac);
  }
  function isEqualToReverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
      if (arr[i] !== arr[arr.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  const result = isEqualToReverse(arr);
  return result;
};
