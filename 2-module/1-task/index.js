function sumSalary(salaries) {
  let result = 0;
  for (const key in salaries) {
    const val = Number(salaries[key]);
    if (!Number.isNaN(val) && isFinite(val)) {
      result += Number(salaries[key]);
    }
  }
  return result;
}
