const repeatString = function(str,num) {
    
    if(num>=0){
        let output="";
    for(let i=0;i<num;i++){
        output = output+str;
    }
    return output;
};
else {return 'ERROR'};}

// Do not edit below this line
module.exports = repeatString;
