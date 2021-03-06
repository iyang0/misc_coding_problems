/**
 * Function to traverse a matrix in a spiral pattern from the top left,
 * to top right, to bottom right, to top left not including previously
 * visited numbers, continuing that pattern until all numbers in matrix visited.
 * Outputs an array of each element visited in the matrix in the order of traversal.
 *
 * input:[
 * [1, 2, 3, 4],
 * [5, 6, 7, 8],
 * [9, 10, 11, 12],
 * [13, 14, 15, 16]]
 * 
 * output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
 * 
 * @param {Array.<Number[]>} matrix - A 2D array of numbers
 * 
 * @returns {Number[]} Array with all numbers in the matrix visited from a spiral method
 */
function spiralTraverse(matrix) {

    let botRow = matrix.length;
    let rightCol = matrix[0].length;
    let topRow = 0, leftCol = 0;
    let i = null, output=[];
    
    while (topRow < botRow && leftCol < rightCol) {
      
      // add the top row from the unvisited elements to the output array
      for (i = leftCol; i < rightCol; i++) {
        output.push(matrix[topRow][i]);
      }
      topRow++;
  
      // add the right column from the unvisited elements to the output array
      for (i = topRow; i < botRow; i++) {
        output.push(matrix[i][rightCol - 1]);
      }
      rightCol--;
  
      // add the bottom row from the unvisited elements to the output array
      if (topRow < botRow) {
        for (i = rightCol - 1; i >= leftCol; i--) {
          output.push(matrix[botRow - 1][i]);
        }
        botRow--;
      }
  
      // add the left column from the unvisited elements to the output array
      if (leftCol < rightCol) {
        for (i = botRow - 1; i >= topRow; i--) {
          output.push(matrix[i][leftCol]);
        }
        leftCol++;
      }
    }
    
    return output;
}