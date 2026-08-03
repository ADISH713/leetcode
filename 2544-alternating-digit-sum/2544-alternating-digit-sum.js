/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let str = n.toString();
    let sum = 0;
    let sign = 1;
    for(let i of str){
        sum+=Number(i)*sign;
        sign=-sign;
    }
    return sum
};
