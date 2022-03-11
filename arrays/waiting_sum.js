/**
 * given an array of positive integers that represent time that it would take
 * for queries to execute, return the minimum time for all the queries to be executed
 * 
 * e.g. [3, 2, 1, 2, 6]
 * output: 17
*/
function sumWaitingTime(queries) {
    queries.sort((a,b) => a-b);
    let curr = 0;
    let sum = 0;
    console.log(queries)
    
    for(let i = 0; i < queries.length; i++){
        const queriesLeft = queries.length - (i + 1);
        curr = queries[i];
        sum += curr * queriesLeft;
    }
    
    return sum;
}