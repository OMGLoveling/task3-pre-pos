'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
   let result= new Array();
    
    let m=0;
    //let a = new Object();
    for(let i = 0;i<collectionA.length-1;i++)
    {
        if(collectionA[i]===collectionA[i+1])
        {
            
            m++;
        }
        else 
        {   let b = collectionA[i];
            let a={key:b,count:m+1};
            result.push(a);//传入数组末尾
            m=0;
    }

    }
    
  let ss =collectionA[collectionA.length-1].split("");
    for(let k=0;k<ss.length;k++)
    {
    
        if(!isNaN(ss[k])) //判断是否为数字
        {
            let d=Math.floor(ss[k]);
            let c={key:ss[0],count:d}; 
            result.push(c);
        }
    }
  
     for(let i=0;i<result.length;i++)
    {
        for(let j=0;j<objectB.value.length;j++)
        {
            if(objectB.value[j]===result[i].key)
            {
                if(result[i].count>=3)
                {
                    result[i].count=result[i].count-parseInt(result[i].count/3);
                }
                
            }
        }
    }
    return  result;
 
}
