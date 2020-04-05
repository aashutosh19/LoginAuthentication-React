console.log('Run me!');  //print    

var test = ''; //old dont use

//Use: [Let can be reassigned while const cannot be reassigned]
let testLet = 'String'; //String
testLet = 9; //Number
const testConst = '';
//testConst = 0; //not okay, constant variables cannnot be changed.


//FUNCTIONS:
// For both of the function types below, the passed parameters doesnt matter, meaning it can print both string and constant. 
function functionName(a){
console.log(a);
return(a);
}

const arrowFunction = (a) => { //roughly lambda
console.log(a);
}

console.log();
functionName('Hello World');
arrowFunction(2);

//ARRAYS:
const myArray = [9,7,'12345',[]]; //Arrays can have any data types
console.log(myArray[2]); // '12345'
console.log(myArray[100]); // ANything out of bound prints as 'undefined'
myArray[0] = 'asd'; //works
console.log(myArray[0]);
myArray[100] = 'it works now'; //allowed to reassgin like this. ALlows adding out of bounds.
console.log(myArray[100]);
myArray[109] = null;
console.log(myArray);