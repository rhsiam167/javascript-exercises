const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((sum,x)=>sum+x,0);
};

const multiply = function(arr) {
 return arr.reduce((mul,x)=>mul*x,1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(x) {
  let f=1;
	for(let i=x;i>=1;i--){
    f=f*i;
  }
  return f;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
