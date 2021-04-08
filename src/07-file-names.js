/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arrOfNames = names;
  for (let i = 1; i < arrOfNames.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arrOfNames[i] === arrOfNames[j]) {
        arrOfNames[i] = `${arrOfNames[i]}(1)`;
        break;
      }
    }
  }

  const objOfRep = {};
  for (let i = 0; i < arrOfNames.length; i++) {
    if (Object.keys(objOfRep).includes(arrOfNames[i])) {
      let rep = objOfRep[arrOfNames[i]];
      rep++;
      objOfRep[arrOfNames[i]] = rep;
    } else {
      objOfRep[arrOfNames[i]] = 1;
    }
  }

  const arrOfValues = Object.values(objOfRep);
  const arrOfKeys = Object.keys(objOfRep);
  for (let i = 0; i < arrOfValues.length; i++) {
    if (arrOfValues[i] > 1) {
      let rep = arrOfValues[i];
      for (let j = arrOfNames.length - 1; j > 0; j--) {
        if (arrOfNames[j] === arrOfKeys[i]) {
          arrOfNames[j] = `${arrOfNames[j].substr(0, arrOfNames[j].length - 2)}${rep})`;
          rep--;
        }
      }
    }
  }
  return arrOfNames;
}

module.exports = renameFiles;
