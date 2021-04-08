/* eslint-disable no-lonely-if */
/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = [];
  for (let i = 0; i < domains.length; i++) {
    arr.push(domains[i].split('.'));
  }
  const arrOfLength = [];
  arr.forEach((el) => {
    arrOfLength.push(el.length);
  });
  const getMaxLength = (array) => Math.max.apply(null, array);
  const maxLength = getMaxLength(arrOfLength);
  const obj = {};
  // собираем повторы '.ru'
  let rep = 0;
  for (let i = 0; i < arr.length; i++) {
    rep++;
    obj[`.${arr[i][arr[i].length - 1]}`] = rep;
  }
  // собираем остальные повторы
  for (let j = 2; j <= maxLength; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (j <= arr[i].length) {
        if (!Object.keys(obj).includes(`${Object.keys(obj)[j - 2]}.${arr[i][arr[i].length - j]}`)) {
          obj[`${Object.keys(obj)[j - 2]}.${arr[i][arr[i].length - j]}`] = 1;
        } else {
          rep = obj[`${Object.keys(obj)[j - 2]}.${arr[i][arr[i].length - j]}`];
          rep++;
          obj[`${Object.keys(obj)[j - 2]}.${arr[i][arr[i].length - j]}`] = rep;
        }
      }
    }
  }
  return obj;
}

module.exports = getDNSStats;
