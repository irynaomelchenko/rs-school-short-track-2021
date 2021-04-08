/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const arrOfRep = [];
  let i = 0;
  let rep = 1;
  while (i < arr.length) {
    while (arr[i] === arr[i + 1]) {
      rep++;
      i++;
    }
    arrOfRep.push([arr[i], rep]);
    rep = 1;
    i++;
  }

  let res = '';

  for (let j = 0; j < arrOfRep.length; j++) {
    if (arrOfRep[j][1] === 1) {
      res += arrOfRep[j][0];
    } else {
      res += arrOfRep[j][1] + arrOfRep[j][0];
    }
  }

  return res;
}

module.exports = encodeLine;
