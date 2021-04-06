/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = `${n}`;
  const arr = str.split('');
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1);
    newArr.push(+arr.join(''));
  }
  newArr.sort((a, b) => a - b);
  return newArr[newArr.length - 1];
}

module.exports = deleteDigit;
