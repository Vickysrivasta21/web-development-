console.log("faulty calculator in js");
console.log("input two numbers");

const prompt = require("prompt-sync")();

do {
    var a = Number(prompt("enter the first number : "));
    var b = Number(prompt("enter the second number : "));
    console.log("enter the choice of your operations to perform");
    console.log("1. addition '+'");
    console.log("2. subtraction '-'");
    console.log("3. division '/'");
    console.log("4. multiplication");
    console.log("5. EXIT '@'");

    let x = Math.floor(Math.random()*100)+1;
    
    var ch = Number(prompt("enter your choice : "));

    let result;
    switch (ch) {
        case 1:
            if (x <= 10) {
                result = a-b;
                console.log(result);
            }
            else {
                result = a+b;
                console.log(result);
            }
            break;
        case 2:
            if (x <= 10) {
                result = a/b
                console.log(result);
            }
            else {
                result = a-b;
                console.log(result);
            }
            break;
        case 3:
            if (x <= 10) {
                result = a**b;
                console.log(result);
            }
            else {
                result = a/b;
                console.log(result);
            }
            break;
        case 4:
            if (x <= 10) {
                result = a+b;
                console.log(result);
            }
            else {
                result = a*b;
                console.log(result);
            }
            break;
    }

} while (ch!=5);