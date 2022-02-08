module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const closeBrackets = [];
  let stack = [];
  
  bracketsConfig.forEach((item, index) => {
    item.forEach((item, index) => {
      if (index == 0) {
        openBrackets.push(item);
      }
    });
  });
  
  bracketsConfig.forEach((item, index) => {
    item.forEach((item, index) => {
      if (index == 1) {
        closeBrackets.push(item);
      }
    });
  });
  
  for (let i = 0; i < str.length; i++) {

    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];
    
    if (topElement == currentSymbol && closeBrackets.includes(currentSymbol)) {
      stack.pop();
    } else if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (closeBrackets.includes(currentSymbol) && closeBrackets.indexOf(currentSymbol) == openBrackets.indexOf(topElement)) {
        stack.pop();
      } else {
        return false;
      }
    }

  }
  return stack.length === 0;
}
