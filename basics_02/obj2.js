// const tinderUser = new Object() // singleton object
// const tinderUser ={}   // Non singleton object


const tinderUser ={}

tinderUser.id="24hrs"
tinderUser.name="harshit"
tinderUser.isLoggedin = false



// console.log(tinderUser);

const regularUser={
    email:"some_one@ gmail.com",
    full_name:{
        first_name:"harshit",
        last_name:"kumar"
    }//any no of nesting can be used here for better understanding
}

// console.log(regularUser.full_name.first_name);


// ---------------------------------------------------------

 const ob1={a:"23", b:"25"}
 const ob2={c:"12",d:"13"}


 const ob3={...ob1,...ob2}// using spread operator

//  console.log(typeof ob3);



//-----------------------------------------------------------------

//another way to perform above o/p

// const ob3 ={ob1,ob2}

 const ob4 = Object.assign({},ob1,ob2) // works same as spread operator for objects
// console.log(ob4);
// whenever values comes from database it is in form of objects
 const users =[
{
    id:231434,
    email:"h@gmail.com",
    contact:8987834709

},
{
    id:34154,
    email:"k@gmail.com",
    contact:3456367684

},
{

},
{

},
/*.
.
.
.
.
..
...
*/

 ]

//  console.log(users[1]);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));



// console.log(tinderUser.hasOwnProperty('loggedin'));

const course = {
    course_name:"this is best course",
    price:"9999",
    courseInstructor:"Sir HK"


}

// course.courseInstructor k jagah hum kog ye bhi use kr skte hai
// console.log(course.courseInstructor);
// const {courseInstructor : instructor}=course
// console.log(instructor);

            //OR

//   const {courseInstructor}=course
//   console.log(courseInstructor);
     

// {
 
// this is the form in which Json is written

// }