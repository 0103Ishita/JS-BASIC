// object
const stud = {
  // anything in curly braces is  object
  gender: "f",
  logindays: ["sat", "sun", "tues"],
  Islogin: true,
};
// console.log(stud);
// console.log(typeof stud);
// stud.name = "homesh";
// console.log(stud);
// console.table(stud)

// let  stud1 = {
//   // anything in curly braces is  object
//   gender: "f",
// };
// console.log(stud1)
//  double quotes required in variable we have to give space

// console.log(stud.name)
// console.log("name")
// if (stud.Islogin) {
//     console.log(stud.logindays)
// }
// //  in anything except false,null is true in javascript
// function sayhi(){
//     console.log("your name");
// }
// sayhi();
// function sum(a, b) {
//     console.log(a + b);
//     console.log(`sum of ${a}and ${b} is ${a+b}`)
// }
// sum(3, 5);
// const sayhello = () => console.log("ish");
// sayhello()
//  if we use curly braces then we have to return the value
// const sum1 = (a, b) => {
//     console.log(a + b);
//     console.log(a * b);
//     console.log(a / b);

// };
// sum1(5,4)
//  IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION
(() => {
  console.log("hello");
})();
