// //alert show window with ok button
// alert("checked");

//prompt used
// let age=prompt("Enter your age");
// console.log("age");

// //prompt always return string
// let num1 = prompt("Enter first number");
// let num2 = prompt("Enter second number");
// console.log(num1 +num2);

// //parseInt convert adding string to number
// let num1 =parseInt("Enter first number"));
// let num2 =parseInt("Enter second number"));
// console.log(num1 +num2);

// //parseint convert string to number
 let num1 = parseInt(prompt("Enter first number"));
 let num2 = parseInt(prompt("Enter second number"));
 alert(num1 + num2);

// //confirm  return true or false have cancel and ok button
// let result = confirm("Welcome");
// console.log(result);

// //confirm used tarnary operator
let userLogout = confirm("Do you want to logout");
let result = userLogout ? "logout" : "log in";
console.log(result);

// //close website confirm
// let closewebsite = confirm("Do you want to close this website");
// console.log(closewebsite);

// //conditional statements
// //if(condition) statement :-
//  let age = 15;
//  if(age >= 18){
//      alert("eligible to vote");
//  } //output false //alert box show in window 

//  //if(condition)-else statement 
//  let num = 10; 
//  if(num > 10){
//     console.log("number is positive")
//  } else{
//     console.log("number is not positive")
//  }
// //% modulus even odd checked
 let userNumber = parseInt(prompt("enter your number"));
 if(userNumber % 2 == 0){
    console.log("Even number")
 } else{
    console.log("Odd number")
 }