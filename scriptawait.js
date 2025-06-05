async function performtask(){
    return new Promise((resolve,reject)=>{
        if(Math.random()>0.433)
        setTimeout(() => {
            resolve("task done!")
            console.log("no error shown in the function")
        },3500);
        else{
            setTimeout(() => {
                console.log("ERROR 404 BAD REQUEST")
                reject("task not fulfilled!!")
            }, 5000);
        }
    })
}

async function fetchapi(){
    let val = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await val.text();
    console.log(data)
    return 455;
}

async function main(){
    console.log("do the task")


    console.log("get data and perform task")

    let task = await performtask()

    let task2 = await fetchapi()
    
    let prom = Promise.all([task,task2])
    prom.then((a)=>{
        console.log(task)
        console.log("task fullfilled")
    }).catch((b)=>{
        console.log(task2)
        console.log("task not fullfilled")
    })
    console.log("data in process")

    console.log("task about to be done!!")
}

main()