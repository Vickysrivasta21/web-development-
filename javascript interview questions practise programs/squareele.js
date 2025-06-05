let arr = [4,6,5,3,22,1,3,3,4,6,7,8]
let ar = []
for (let i = 0; i < arr.length; i++) {
    if(arr[i]==arr[i+1])
    {
        ar.push(arr[i])
        i++
    }
    else{
        ar.push(arr[i])
    }
}
let sqar = ar.map((ele)=>{
    return ele+ele
})
console.log(ar)
console.log(sqar)
console.log(sqar.length)