// Вычислить факториал
function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  if (n > 1) {
    return n * factorial(n - 1);
  }
}
