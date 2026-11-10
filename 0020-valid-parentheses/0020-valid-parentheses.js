/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = []
    for(let i of s){
        if (i === '{'){
            arr.push('}')
        }
        else if (i === '['){
            arr.push(']')
        }
        else if (i === '('){
            arr.push(')')
        }
        else if(arr.pop() !== i){
            return false
        }
    }
    return arr.length === 0
};