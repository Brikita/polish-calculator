# Implementation Notes

## What I Learned

While implementing this Polish notation calculator, I gained deeper understanding of:

1. **Recursive parsing**: How recursion can elegantly model the structure of prefix expressions
2. **Error handling**: The importance of validating input at multiple stages
3. **Algorithm design**: Choosing the right approach (recursive vs iterative) based on the problem structure

## Design Decisions

### Why Recursion?

I chose a recursive approach because:

- Polish notation is inherently recursive in structure
- The call stack naturally handles operator precedence
- Code is cleaner and more intuitive than managing an explicit stack

### Error Validation Strategy

I added three layers of validation:

1. **Input validation**: Check for empty/null expressions upfront
2. **Runtime validation**: Ensure tokens don't run out mid-parse
3. **Post-processing validation**: Verify all tokens were consumed

This catches malformed expressions at the earliest possible point.

## Alternative Approaches Considered

**Iterative with explicit stack**: Would work but adds complexity without benefit for this use case.

**Two-pass approach**: Parse into AST first, then evaluate. Overkill for this problem size.

The recursive single-pass approach strikes the best balance of simplicity and correctness.

## If I Had More Time

Potential enhancements:

- Support for more operators (%, ^, sqrt)
- Floating-point precision handling
- Better error messages with token position
- Performance benchmarking for very deep expressions
