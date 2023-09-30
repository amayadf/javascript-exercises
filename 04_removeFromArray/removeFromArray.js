const removeFromArray = function(array, ...argumentsToRemove) {
    return array.filter(val => !argumentsToRemove.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
