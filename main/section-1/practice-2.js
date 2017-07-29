'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let collection = collectionB[0];
  let result=new Array();
  let k = 0;
    for(var i=0;i<collectionA.length;i++)
  {
    for(var j=0;j<collection.length;j++)
    {
      if(collectionA[i]===collection[j])
      {
        result[k]=collectionA[i];
        k++;
      }
    }
  }
  return result;
}
