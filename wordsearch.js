const transpose = function(matrix) {
  let transposed = [];
  for (let i = 0; i < matrix[0].length; i++) {
    transposed[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }
  return transposed;
};

const wordSearch = (letters, word) => {

  if (letters.length === 0) {
    return false;
  }
  const lettersV2 = transpose(letters);
  const verticalJoin = lettersV2.map(ls => ls.join(''));


  for (l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }

  }
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }

  }
  return false;
};
module.exports = wordSearch;
