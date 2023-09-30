const sumAll = function(number1, number2) {
    if(number1 < 0 || number2 < 0 || !Number.isInteger(number1) || !Number.isInteger(number2)) return 'ERROR';
    
    let biggerNumber = (number1 > number2) ? number1 : number2;
    let smallerNumber = (number1 < number2) ? number1 : number2;

    let sum = 0;
    for(let i = smallerNumber; i < biggerNumber+1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
