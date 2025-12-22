exports.calculate = function (expression) {
  if (!expression || expression.trim() === "") return 0;

  const tokens = expression.trim().split(/\s+/);
  let currIndex = 0;

  const processToken = () => {
    // check if the expression is complete
    if (currIndex >= tokens.length) {
      throw new Error("Incomplete expression: missing operand");
    }

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
        if (operand2 === 0) {
          throw new Error("Division by zero");
        }
        return operand1 / operand2;
      default:
        throw new Error(`Unknown operator: ${token}`);
    }
  };

  const result = processToken();

  // make sure all tokens were consumed
  if (currIndex < tokens.length) {
    throw new Error("Invalid expression: extra tokens after evaluation");
  }

  return result;
};
