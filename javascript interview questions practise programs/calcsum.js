let arr = [1,3,22,3,4,56,66,54,-44]

let sum = 0;
 for(let i = 0;i<arr.length;i++)
 {
    if(arr[i]<0)
    {
        break
    }
    else{
        sum = sum + arr[i]
    }
 }
 console.log(sum)