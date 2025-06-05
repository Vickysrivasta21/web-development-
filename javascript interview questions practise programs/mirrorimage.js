const prompt = require("prompt-sync")();

let string = prompt("enter a string : ")

let revstring
let combinestring 

revstring  = string.split('').reverse().join('')

combinestring = string + revstring

console.log(combinestring)