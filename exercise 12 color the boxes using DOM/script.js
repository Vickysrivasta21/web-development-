

let box = document.getElementsByClassName('boxes')
function random()
{
    let clr1 = Math.floor(Math.random()*200);
    let clr2 = Math.floor(Math.random()*200);
    let clr3 = Math.floor(Math.random()*200);

    return `rgb(${clr1},${clr2},${clr3})`
}
Array.from(box).forEach(e=>{
    e.style.color = random();
    e.style.backgroundColor = random();
})
