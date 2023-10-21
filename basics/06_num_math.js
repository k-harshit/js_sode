// const score =200;
// console.log(score);

// /* Here balance is typecasted into number although it is itself a number */
// const balance = new Number(190)
// console.log(Number);

// console.log(balance.toString);
// //balance is converted to string data type

// console.log(balance.toFixed(2));
// // converted to float
// // commonly used for more precision in digits

// const newNumber=22334.9857;
// console.log(newNumber.toPrecision(2));

// console.log(newNumber.toPrecision(3));

// console.log(newNumber.toPrecision(4));
// console.log(newNumber.toPrecision(5));
// console.log(newNumber.toPrecision(6));
// const money_count=10000000000;
// console.log(money_count.toLocaleString());
// console.log(money_count.toLocaleString('en-IN'));


// // ---------------Math()-------------------

// /**
//  * abs()
//  * round()
//  * ceil()
//  * floor()
//  * etc.
//  * random()
//  */
// //  to generate a random number from 0-9

console.log(Math.floor(Math.random()*10));
// we have multiplied by 10 to get the range of number till 10 (0-9)
// for dice multiply by 6
console.log(Math.ceil(Math.random()*6))


// standard way to represent/generate number within a given range
const max=10
const min=2
console.log(Math.floor(Math.random()* (max-min+1)))+ min;
// the code above will generate random numbers between 2-10