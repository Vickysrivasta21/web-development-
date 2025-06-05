const prompt = require("prompt-sync")();


async function coffeemaker(typecoffee)
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("your coffee is ready....")
        }, Math.floor(Math.random()*10)*1000);
    })
}
async function main(){

let typeofcoffee = prompt("enter a coffee name : ")

let task = await coffeemaker(typeofcoffee)
console.log(task)
}
main()