const sumAll = function(start, end) {
    let result = 0;
    let i = start; 
    if (typeof(end) != "number" || start < 0){
        return "ERROR"
    }
    if (start < end){
        while (i <= end){
            result = result + i;
            i++  
        }
    }
    else{
        while (i >= end){
            result = result + i;
            i--  
        }
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
