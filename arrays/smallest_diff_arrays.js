/**
 * @param {Number[]} arrOne - an array of integers
 * @param {Number[]} arrTwo - an array of integers
 * @returns {[Number, Number]} An array of two numbers representing a number from array one and array two that have the smallest absolute difference
*/
function smallestDifference(arrOne, arrTwo) {
    arrOne.sort((a,b) => a-b);
    arrTwo.sort((a,b) => a-b);
    let i=0, j=0;
    let smallest = Infinity, current = Infinity;
    let smallestDiff = [];
    
    while(i < arrOne.length && j < arrTwo.length){
        current = Math.abs(arrOne[i] - arrTwo[j]);
        
        if(current === 0) return [arrOne[i], arrTwo[j]];
        
        if(smallest > current) {
            smallest = current;
            smallestDiff = [arrOne[i], arrTwo[j]];
        }
        
        arrOne[i] < arrTwo[j] ? i++ : j++;
    }
      
    return smallestDiff;
}