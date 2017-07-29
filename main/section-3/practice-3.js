'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let result= new Array();
    
    let m=0;
   
    for(let i = 0;i<collectionA.length;i++)
    {
        if(collectionA[i]===collectionA[i+1])
        {
            
            m++;
        }
        else 
        {   let b = collectionA[i];
            let a={key:b,count:m+1};
            result.push(a);
            m=0;
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
