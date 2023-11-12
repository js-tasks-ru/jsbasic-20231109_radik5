// Вычислить факториал вариант 1
/* function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  if (n > 1) {
    return n * factorial(n - 1);
  }
} */

// Вычислить факториал вариант 2
function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i < n + 1; i++) {
    result *= i;
  }
  return result;
}
