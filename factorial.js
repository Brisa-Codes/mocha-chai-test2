function factorialize(num){
    result = 1;
    // validate algorithm
    if(num > 1){
        
        // for(var i = num - 1; i > 1; i--){
        for(var i=2; i<=num; i++){
            // multiply the number with the previous number
            result *= i;
            //console.log(result);
        }
    }

    // return the result
    return result;
}

// logs the result of the factorialize function
// console.log(factorialize(1));

module.exports = factorialize;