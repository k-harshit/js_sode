const score =200;
console.log(score);

/* Here balance is typecasted into number although it is itself a number */
const balance = new Number(190)
console.log(Number);

console.log(balance.toString);
//balance is converted to string data type

console.log(balance.toFixed(2));
// converted to float

const newNumber=22334.9857;
console.log(newNumber.toPrecision(2));

console.log(newNumber.toPrecision(3));

console.log(newNumber.toPrecision(4));
console.log(newNumber.toPrecision(5));
console.log(newNumber.toPrecision(6));
const money_count=10000000000;
console.log(money_count.toLocaleString());
console.log(money_count.toLocaleString('en-IN'));
