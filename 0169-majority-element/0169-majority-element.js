/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let current = null;
    let count = 0;

    for(let i of nums){
        if (count === 0){
            current = i
        }
        count += (i === current)?1:-1;
    }
    return current;
};