// types of loops
//while loop
let i = 1;
while(i < 10){
    console.log("divya");
    i++; // i = i + 1
}

// //e.g :- i = 3;
// let i = 3;
// while(i <= 10){
//     console.log(i);
// }

// let i = 10;
// while(i <= 10){
//     console.log(10*i);
//     i++;
// }

// let i = 10;
// while(i > 0){
//     console.log(10*i);
//     i--;
// }

// for loop

for(let i = 1; i <= 10; i++){
    console.log(i);
}       

for(let i = 11; i > 0; i--){
    console.log(i);
}   

for(let i = 10; i <= 100; i = i + 10){
    console.log(i);
}

// for loop to print table of 6
for(let i = 1; i <= 10; i++){
    console.log("6 x " + i + " = " + (6*i));
}

//do while loop

let b = 1;

do{
    console.log("divya");
    b++;
}   while(b < 10);

// let a = 10;  

// do{
//     console.log(a);
//     a++;
// }   while(a <= 10);  

// let a = 15;  

// do{      
//     console.log(10*a);
//     a--;
// }   while(a > 0);//condition

// for of loop
let colors = ["red", "green", "blue", "yellow"];    
for(let color of colors){
    console.log(color);
}

// for in loop
let person = {
    name: "Divya",
    age: 21,
    city: "Pune"
};
for(let key in person){
    console.log(key + ": " + person[key]);
}