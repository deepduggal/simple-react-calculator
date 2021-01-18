/****************************
 * 1-NUMBER OPERATIONS
 ****************************/
export const toPercent = (a) => (a * 100);
export const toDecimal = (a) => (a / 100);

/****************************
 * 2-NUMBER OPERATIONS
 ****************************/
export const add = (a, b) => (a + b);
export const subtract = (a, b) => add(a, -b);
export const multiply = (a, b) => (a * b);
export const divide = (a, b) => (a / b);

/**
 * Perform an operation, given any amount of numbers to operate on
 */
export function doOperation(operation, ...numbers) {
  
}