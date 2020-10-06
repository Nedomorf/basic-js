const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let res = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let z = 0; z < matrix[i].length; z++) {
      if ( matrix[i][z] === '^^' ) res++;
    }
  }
  return res;
};
