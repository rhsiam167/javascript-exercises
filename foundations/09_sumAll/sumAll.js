const sumAll = function(a,b) {
    if(typeof(a)==='number'&&typeof(b)==='number'&& Number.isInteger(a)&& Number.isInteger(b)&& a>0 && b>0){
        let arr = [];
        arr.push(a);
        arr.push(b);
        arr.sort((a,b)=>a-b);
        let sum = 0;
        for(let i=arr[0];i<=arr[1];i++){
            sum += i;
        }
            return sum;

    }
    
    else {return 'ERROR';}
};

// Do not edit below this line
module.exports = sumAll;
