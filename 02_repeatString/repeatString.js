const repeatString = function(string, repetitions) {
    let stringRepeated = '';
    if (repetitions < 0){
        return 'ERROR';
    }
    else{
        for (let i = 0; i < repetitions; i++)
        {
        stringRepeated = stringRepeated.concat(string)
        }
        return stringRepeated
    }  
};

// Do not edit below this line
module.exports = repeatString;
