var rotate = function (matrix) {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < i; j++) {
      let temp = matrix[j][i];
      matrix[j][i] = matrix[i][j]
      matrix[i][j] = temp
    }
  }

  console.log(matrix)
};

rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
])