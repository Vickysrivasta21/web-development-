let prom1 = new Promise((resolve, reject) => {
    var val = Math.random();
    if (val < 0.5) {
        reject("soory bad request")
    }
    else{
        resolve("task completed")
        console.log("hii this is your work")
    }
})
let prom2 = new Promise((resolve, reject) => {
    var val = Math.random();
    if (val < 0.5) {
        reject("soory bad request")
    }
    else{
        resolve("task completed again")
        console.log("hii this is your work again")
    }
})

let p1 = Promise.all([prom1,prom2])
p1.then((a)=>{
    console.log(a)
}).catch((error)=>{
    console.log(error)
})