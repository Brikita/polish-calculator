# Solution: Polish Notation Calculator

## Overview

This project implements a calculator that evaluates expressions written in **Polish notation** (also called prefix notation), where operators appear before their operands.

## Approach

I used a **recursive descent parser** to solve this problem. The algorithm leverages the call stack to naturally handle nested expressions without needing to maintain an explicit stack data structure.

### Algorithm

The core idea is simple:

1. **Read the next token**
2. **If it's a number**: return it directly
3. **If it's an operator**:
   - Recursively evaluate the next token (first operand)
   - Recursively evaluate the token after that (second operand)
   - Apply the operator to both results

This recursive approach elegantly mirrors the structure of prefix notation itself.

### Example Walkthrough

For the expression `* + 1 2 3`:

```
1. Read '*' → operator, need 2 operands
2.   Recurse: Read '+' → operator, need 2 operands
3.     Recurse: Read '1' → number, return 1
4.     Recurse: Read '2' → number, return 2
5.   Apply '+': 1 + 2 = 3
6.   Recurse: Read '3' → number, return 3
7. Apply '*': 3 * 3 = 9
```

## Error Handling

The solution includes validation for common edge cases:

- **Division by zero**: Throws an error before attempting the operation
- **Incomplete expressions**: Detects when operators don't have enough operands (e.g., `+ 1`)
- **Malformed input**: Catches extra tokens that weren't consumed (e.g., `1 2 3`)
- **Invalid operators**: Reports unknown operator symbols clearly

## Time & Space Complexity

- **Time**: O(n) where n is the number of tokens - each token is processed exactly once
- **Space**: O(d) where d is the maximum depth of nested expressions (due to recursion stack)

## Testing

Run the test suite to verify the implementation:

```bash
npm test
```

The implementation passes all provided test cases and handles edge cases gracefully.
