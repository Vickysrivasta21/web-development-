const prompt = require("prompt-sync")();

var pass = prompt('enter any password : ')

let arr = pass.split("")
let flag1 = 0
let flag2 = 0
let flag3 = 0
if (pass.length >= 8) {
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) >= 0 && Number(arr[i]) < 10) {
            flag3 = 1
        }
        else{
        if (arr[i] == arr[i].toUpperCase()) {
            flag1 = 1
        }
        if (arr[i] == arr[i].toLowerCase()) {
            flag2 = 1
        }
        }
    }
    if (flag1 == 1&&flag2 == 1&&flag3 == 1) {
        console.log("password is valid and can be used")
        // console.log(flag1,flag2,flag3)
        // console.log(arr)

    }
    else {
        console.log("not a valid password")
        // console.log(flag1,flag2,flag3)
        // console.log(arr)
    }
}
else {
    console.log("invalid password found....")
}