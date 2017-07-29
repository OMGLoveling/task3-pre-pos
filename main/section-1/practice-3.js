'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let result = new Array();
  let collection = objectB.value;
  let k=0;
  for(let i=0;i<collectionA.length;i++) {
      for (let j = 0; j < collection.length; j++) {
          if (collectionA[i] === collection[j]) {
              result[k] = collection[j];
              k++;
          }
      }
  }
  return result;
}
