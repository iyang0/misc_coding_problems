/**
 * @param {number[]} arr - an array of integers, not sorted
 * @returns {number[]} an array of the top three integers in the input from smallest to largest
*/
function findThreeLargestNumbers(arr) {
    let topThree = {
            "first": null,
            "second": null,
            "third": null,
        }
    
    for(let num of arr){
        let temp = num;
        if(num >= topThree.first || topThree.first === null){
            temp = topThree.first;
            topThree.first = num;
        } 
        if(num >= topThree.second || topThree.second === null){
            const num2 = topThree.second;
            topThree.second = temp;
            temp = num2;
        } 
        if(num >= topThree.third || topThree.third === null){
            topThree.third = temp;
        } 
    }
    
    return [topThree.third, topThree.second, topThree.first];
}