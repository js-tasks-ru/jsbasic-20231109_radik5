function getMinMax(str) {
  const matches = str.match(/(-?\d+(\.\d+)?)/g);
  const max = Math.max(...matches);
  const min = Math.min(...matches);
  return {
    min,
    max,
  };
}
