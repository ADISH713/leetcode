/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
     let num=0;
    for(let i of accounts){
      let sum = i.reduce((total,item)=>total+item,0)
      if(sum>num){
        num=sum;
    }
  };
  return num;
};