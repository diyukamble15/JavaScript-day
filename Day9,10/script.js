alert("Hello, World");

// let title = document.title;
// console.log("Title of the document is: " + title);   

let number = parseInt(prompt("Enter a number: "));

document.title = "Number is " + number;

for (let i = 1; i <= 10; i++) {

    let op = i * number;

    document.writeln(op + "<br>");
}