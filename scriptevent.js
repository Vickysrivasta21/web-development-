let button = document.getElementById("btn")

button.addEventListener("dblclick",()=>{
    alert("you have clicked button")
    document.querySelector('.conta').style.backgroundColor = "red"
    // x.style.backgroundColor="red"
    document.querySelector('.box').style.color = "yellow"
    // y.style.color = "yellow";
    document.querySelector('.box').innerHTML = "hey im no more a box now";
})

document.querySelector('.conta').addEventListener("click",()=>{
    alert("you have just right clicked")
})
document.querySelector('.box').addEventListener("click",(e)=>{
    e.stopPropagation();
    alert("youhave clicked me again")
})