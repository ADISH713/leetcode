/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let res = nums.reduce((item,current)=>item>current?item:current)
    let ans = nums.indexOf(res)
    return ans
};