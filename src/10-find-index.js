/* eslint-disable consistent-return */
/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const binarySearch = (start, end) => {
    if (end < 1) return array[0];
    if (end - 1 === start) return value === array[start] ? start : end;
    const indOfMid = Math.floor(start + (end - start) / 2);
    const midOfArr = array[indOfMid];
    if (value === midOfArr) return indOfMid;
    if (value > midOfArr) return binarySearch(indOfMid, end);
    if (value < midOfArr) return binarySearch(start, indOfMid);
  };

  return binarySearch(0, array.length - 1);
}

module.exports = findIndex;
