'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let result = new Object();
    for(let i=0;i<collectionA.length;i++)
    {
        for(let j=0;j<objectB.value.length;j++)
        {
            if(objectB.value[j]===collectionA[i].key)
            {
                collectionA[i].count--;
                
            }
        }
    }
    return collectionA;
}
