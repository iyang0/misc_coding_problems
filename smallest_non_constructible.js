// function to find smallest non constructible change from an array of coins
// e.g. input: coins = [5, 7, 1, 1, 2, 3, 22]
// output: 20
function smallestNonConstructibleChange(coins) {
    coins.sort( (a,b) => a-b );
    let possibleHighest = 0;
    
    for(let coin of coins){
        // if a coin denomination is more than one of the current possible highest
        // then that is not possible to make, otherwise add to possible highest.
        if(coin <= possibleHighest+1){
            possibleHighest += coin;
        } else {
            return possibleHighest+1;
        }
    }
    return possibleHighest+1;
}