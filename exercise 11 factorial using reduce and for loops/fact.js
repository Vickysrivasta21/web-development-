

do{
    console.log("calculate the factorial using reduce or for loop")

    const prompt = require("prompt-sync")();

    var ele = Number(prompt("enter the number : "))
    console.log("enter your choice \n 1. for loop\n2. reduce method\n3. EXIT")
    var ch = Number(prompt("enter your choice"))

    switch(ch)
    {
        case 1:
        let f = 1;
        for(let i = ele;i>0;i--)
        {
            f = f * i;
        }
        console.log("factorial using for loop is : " +f)
        break;
        case 2:
        let arr = []
        let x =0;
        for(let j = 1;j<=ele;j++)
        {
            arr[x++] = j
        }
        const fact = (x,y)=>{
            return x*y
        }
        let newarr = arr.reduce(fact)
        console.log(newarr)
    }
}while(ch!=3)