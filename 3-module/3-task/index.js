function camelize(str) {
  let arr = str.split("");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "-") {
      result.push(arr[i + 1].toUpperCase());
      i++;
    } else {
      result.push(arr[i]);
    }
  }
  return result.join("");
}
