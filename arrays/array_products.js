/**
 * O(n^2) time, O(N) space
 * @param {Number[]} arr - a non-empty array of integers
 * @returns {Number[]} array of integers where each element is the product of every other number in input.
*/
function arrayOfProducts(arr) {
    let output = [];
    
    for(let i = 0; i<arr.length; i++){
        let left = i-1;
        let right = i+1;
        let product = 1;
        while(left >= 0){
            product = product * arr[left];
            left--;
        }
        
        while(right < arr.length){
            product = product * arr[right];
            right++;
        }
        output.push(product);
    }
    
    return output;
}