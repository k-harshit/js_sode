// objects can be created using various ways
/**
 * singleton -->(object.create)
 * 
 */

//object literals

const mySym = Symbol("key1")


const JsUser = {
    Full_Name: "Harshit Kumar",
    age:18,
    [mySym]:"new_key",
    email:"harshitksingh333@gmail.com",
    is_loggedIn: false,
}
// console.log(JsUser.email);
// console.log(JsUser["email"]); //prefered way
// console.log(typeof JsUser[mySym]);


// console.log(JsUser);

// --------------------------------------------

// JsUser.email="hk@email.com"
// Object.freeze(JsUser)


//  a value once freezed can't be changed later


// JsUser.email="Kharshit@email.com"
// console.log(JsUser);

JsUser.greetings = function(){
    console.log(`hello ${this.Full_Name}`);
}
console.log(JsUser.greetings);
// console.log(JsUser.greetings());