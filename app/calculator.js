exports.calculate = function (expression) {
  if (!expression || expression.trim() === "") return 0;

  const tokens = expression.trim().split(/\s+/);
  let currIndex = 0;

  const processToken = () => {
    const token = tokens[currIndex++];
    const num = parseFloat(token);

    if (!isNaN(num)) {
      return num;
    }

    const operand1 = processToken();
    const operand2 = processToken();

    switch (token) {
      case "+":
        return operand1 + operand2;
      case "-":
        return operand1 - operand2;
      case "*":
        return operand1 * operand2;
      case "/":
        return operand1 / operand2;

      default:
        return 0;
    }
  };

  return processToken();
};
