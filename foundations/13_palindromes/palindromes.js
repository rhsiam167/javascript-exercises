const palindromes = function (str) {
    const string = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    for(let i=0;i<string.length;i++){
        if(string[i]!=string[string.length-1-i])return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
