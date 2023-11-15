// Напишите функцию `checkSpam(str)`, возвращающую `true`, если `str` содержит `'1xBet'` или `'XXX'`, а иначе `false`.

// Функция должна быть нечувствительна к регистру:

// ```js
// checkSpam('1XbeT now') === true
// checkSpam('free xxxxx') === true
// checkSpam('innocent rabbit') === false

function checkSpam(str) {
  const regexp = /1xBet|XXX/i;
  return regexp.test(str);
}
