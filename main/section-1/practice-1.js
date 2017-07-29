'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {

    let result = new Array();
    let k=0;
    for(let i=0;i<collectionA.length;i++)
    {
        for(let j=0;j<collectionB.length;j++){
            if(collectionA[i]=== collectionB[j]){
                result[k]=collectionA[i];
                k++;
            }
        }
    }
        return result;
};


