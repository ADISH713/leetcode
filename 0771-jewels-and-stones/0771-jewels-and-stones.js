/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(let j of stones){
        if(jewels.includes(j)){
        count++;
        }
    }
    return count;
    
};