'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
 
    for(let i=0;i<collectionA.length;i++)
    {
        for(let j=0;j<objectB.value.length;j++)
        {
            if(objectB.value[j]===collectionA[i].key)
            {
                if(collectionA[i].count>=3)
                {
                    collectionA[i].count=collectionA[i].count-parseInt(collectionA[i].count/3);
                }
                
            }
        }
    }
    return collectionA;
}
