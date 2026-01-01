/**
 * Evaluates expressions in Polish notation (prefix notation).
 * Operators come before operands: "+ 1 2" = 3, "* + 1 2 3" = 9
 */
exports.calculate = function (expression) {
  if (!expression || expression.trim() === "") {
    return 0;
  }

  const tokens = expression.trim().split(/\s+/);
  let currIndex = 0;

  const processToken = () => {
    if (currIndex >= tokens.length) {
      throw new Error("Incomplete expression: missing operand");
    }

    const token = tokens[currIndex++];
    const num = parseFloat(token);

    // If it's a number, return it
    if (!isNaN(num)) {
      return num;
    }

    // Otherwise it's an operator - recursively evaluate operands
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
        throw new Error(`Unknown operator: '${token}'`);
    }
  };

  const result = processToken();

  // Make sure all tokens were used
  if (currIndex < tokens.length) {
    throw new Error("Invalid expression: unused tokens remain");
  }

  return result;
};
