'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let result = new Array();
  let k = 0;
  let collection = objectB.value;
  for(let i = 0;i<collectionA.length;i++)
  {
    for(let j = 0;j<collection.length;j++)
    {
      if(collectionA[i].key===collection[j]) {
          result[k]=collection[j];
          k++;
      }
    }
  }
  return result;
}