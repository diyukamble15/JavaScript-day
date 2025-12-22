// //comparison operators

// // == (equal) = true /false does not check data type but checks value

// let a = 10;
// let b = "10";
// console.log(a == b); // output: true
// // let b = 15;
// // console.log(a == b); // output: false


// //=== (strict equal) = true /false  strickly check data type and value

// let a = 10;
// let b = "10";
// console.log(a === b); // output = false
// // let b = 10; 
// // console.log(a === b); // output = true

// // != (not equal) = true /false does not check data type but check value

// let a = 10;
// let b = "10";
// console.log(a != b); // output = false
// //  let b =10;
// //  console.log(a != b); // output = false
// //  let b =20;
// //  console.log(a != b); // output = true


// logical operators

// AND (&&)=consider its multiply

// 1 AND 0 = 0 
// 0 AND 0 = 0
// 1 AND 1 = 1
// 0 AND 1 = 0

// false && true = false
// true && true = true  

let age = 12;
let youHaveVoterId = true;
console.log(age >= 18 && youHaveVoterId); // output = false

// let age = 30;
// let youHaveVoterId = true;
// console.log(age >= 18 && youHaveVoterId); // output = true

const username = "javascript";
const password = "js@123";
console.log(username == "javascript" && password == "js@123"); // output = true

//  const username = "javascript";
//  const password = "js@12";
//  console.log(username === "javascript" && password === "js@123"); // output = false    

// // OR (||)=consider its addition

// 1 OR 0 = 1
// 0 OR 0 = 0
// 1 OR 1 = 1
// 0 OR 1 = 1

// // false || true = true
// // false || false = false

// const name = "divya";
// const pass = 1234;
// console.log(name === "divya" || pass === 12345); // output = true

// let name = "diyu";
// let pass = 1506;
// console.log(name === "divya" || pass === 12345); // output = false


// Tarniary Operator

// let age = 14;
// let vote = (age >= 18) ? "Yes, you can." : "No, you cannot.";
// console.log(vote); // output: No, you cannot

 let user = "code" ;
 let accept = (user === "code") ? "Accept." : "Not Accept.";
 console.log(accept); // output = Accept


