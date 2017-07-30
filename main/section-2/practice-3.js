'use strict';

module.exports = function countSameElements(collection) {
    let result=[];
    
    let reg=/\[|\]|:|-/g;

    collection.forEach(function(elem){

        for(var index=0;index<result.length;index++)
    
            {
            if (elem.replace(reg, ',').split(",")[0] === result[index].name)
            {
               result[index].summary += elem.replace(reg, ",").split(",")[1] ? parseInt(elem.replace(reg,",").split(",")[1]) : 1;
               return;
            }
            }
     
            
             result[result.length] = {
                name: elem.replace(reg, ",").split(",")[0],
                summary: elem.replace(reg, ",").split(",")[1] ? parseInt(elem.replace(reg,',').split(",")[1]) : 1
            }
            

         })

        return result;
}
