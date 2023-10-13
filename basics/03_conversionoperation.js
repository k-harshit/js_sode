let score = null

//console.log(typeof score);
//console.log(typeof (score));
//let numberValue= Number (score)
//console.log(typeof numberValue);
//console.log(numberValue);
//numberValue is NaN ->Not a Number
/*
"33 " ==> 33
"abs34" ==> NaN
true  ==> 1
*/

let myName ="" 
let bool_name=Boolean(myName) // agar myame me koi string hoga toh 1 otherwise 0
console.log(bool_name);
/*
1 => true ; 0=>false;
 " " => false;
 "abcd" => true;
 */
/*******                     operations                            *******/


console.log("1" + 2 ) 
console.log(1 + "2" )
console.log(1 + 1 + "2");
console.log("1" + 1 + 2 );


console.log(true)
console.log(+true);
console.log(" ");
console.log(+"");
// == & <,>,<=,>=
// i.e checking and comparison operators work differently in js

/*
= is an assignment operator which is used to assign a value to a variable.
== is an equality operator which is used to compare the values of two variables.
=== is an strictly equality operator which is used to compare the values as well as the type of the two variables.
*/
console.log(null > 0);
console.log(null < 0 );
console.log(null >= 0);
// null is converted into NaN/0 ambiguously so it is a problem
//           OR
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined > 0);

// both null & undefined----- above type of code should be avoided