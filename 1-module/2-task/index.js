/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
/**
 * Необходимо, чтобы на сайте можно было поприветствовать
 * только пользователей, которые удовлетворяют следующему
 * условию – имя не пустое, без пробелов, минимум 4 символа.
 */
function isValid(name) {
  // условие - имя непустое
  if (!name) {
    return false;
  }
  if (name.trim().length < 4) {
    return false;
  }
  if (name.includes(' ')) {
    return false;
  }
  return true;
}

function sayHello() {
  let userName = prompt("Введите ваше имя");

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print("Некорректное имя");
  }
}
