/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<=2) return n;

    let prevStep = 1;
    let nextStep = 2;
    
    for(let i=3;i<=n;i++){
        let current = prevStep+nextStep;
        prevStep = nextStep;
        nextStep = current;
    }
    return nextStep
};