'use strict';

module.exports = function countSameElements(collection) {
    let result= new Array();
    
    let m=0;
    //let a = new Object();
    for(let i = 0;i<collection.length;i++)
    {
        if(collection[i]===collection[i+1])
        {
            
            m++;
        }
        else 
        {   let b = collection[i];
            let a={key:b,count:m+1};
            result.push(a);
            m=0;
    }

    }
  return result;
}
