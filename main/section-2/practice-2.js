'use strict';

module.exports = function countSameElements(collection) {
    let result= new Array();
    
    let m=0;
    //let a = new Object();
    for(let i = 0;i<collection.length-1;i++)
    {
        if(collection[i]===collection[i+1])
        {
            
            m++;
        }
        else 
        {   let b = collection[i];
            let a={key:b,count:m+1};
            result.push(a);//传入数组末尾
            m=0;
    }

    }
    
  let ss =collection[collection.length-1].split("");
    for(let k=0;k<ss.length;k++)
    {
    
        if(!isNaN(ss[k])) //判断是否为数字
        {
            let d=Math.floor(ss[k]);
            let c={key:ss[0],count:d}; 
            result.push(c);
        }
    }
    
  return result;
}