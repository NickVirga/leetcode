/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  for (let col = 0; col < matrix.length; col++) {
    console.log(matrix[col])
    for (let row = 0; row < matrix[col].length; row++) {
      console.log(matrix[col][row]);
    }
  }
};

minFallingPathSum([
  [2, 1, 3],
  [6, 5, 4],
  [7, 8, 9],
]);
