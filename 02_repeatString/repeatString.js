const repeatString = function(string, num) {
    if(num < 0) return "ERROR";
    let modifiedString = "";
    for(let i = 0; i < num; i++) {
        modifiedString += string;
    }
    return modifiedString;
};

// Do not edit below this line
module.exports = repeatString;
