console.log("hello world")

let age = 45

if(age>18)
{
    console.log("you are eligible to drive")
}
else{
    console.log("you are not eligible to drive")
}

if(age>18)
{
    let x = 155
    console.log(typeof x)
}
else{
    console.log("invalid statement")
}

for (let i = 0; i < 20; i++) {
    console.log(i)
}

let i = {
    name:"avnish",
    role :"student",
    company:"TCS ninja"
}
for (const key in i)  {
        const element = i[key];
        console.log(key,element)
}