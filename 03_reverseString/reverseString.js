const reverseString = function(str) {
    let strArray = str.split('');
    let strArrayReversed = [];
    for (let i = 0; i <= strArray.length; i++){
        strArrayReversed[i] = strArray[strArray.length - i]; 
    }
    return strArrayReversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
