do{
console.log("do you want to get a cool business name")

console.log("YES or NO? select 1 for yes and 2 for No")
const prompt = require("prompt-sync")();
var choice = Number(prompt("enter your choice : "))
if(choice==1)
{
let n1 = Math.floor(Math.random()*3)+1;

let n2 = Math.floor(Math.random()*3)+1;

let n3 = Math.floor(Math.random()*3)+1;



const adjlist = (num1)=>{
    switch(num1)
    {
        case 1:
        return "Crazy";
        break;
        case 2:
        return "Amazing";
        break;
        case 3:
        return "fire";
        break;
    }
}
const shopname = (num2)=>{
    switch(num2)
    {
        case 1:
        return "Engine";
        break;
        case 2:
        return "Foods";
        break;
        case 3:
        return "Garments";
        break;
    }
}
const lastwrd = (num3)=>{
    switch(num3)
    {
        case 1:
        return "Bros";
        break;
        case 2:
        return "Limited";
        break;
        case 3:
        return "Hub";
        break;
    }
}

let str = adjlist(n1) +" ";
let str2 = shopname(n2)+ " ";
let str3 = lastwrd(n3)+ " ";

let string = str.concat(str2,str3)

console.log("suitable business name for your firm can be : " +string)
}
}while(choice!=2);