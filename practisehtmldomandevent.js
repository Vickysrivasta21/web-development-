let btn1 = document.querySelector('.btn1')

let btn2 = document.querySelector('.btn2')

let btn3 = document.querySelector('.btn3')


function fill(name, age, work) {
    let d = document.querySelector('.item1')
    let cr = document.createElement("li")
    cr.innerHTML = name
    d.append(cr)
    let cr1 = document.createElement("li")
    cr1.innerHTML = age
    d.append(cr1)
    let cr3 = document.createElement("li")
    cr3.innerHTML = work
    d.append(cr3)
}
function fill2(name, age, work) {
    let d = document.querySelector('.item2')
    let cr = document.createElement("li")
    cr.innerHTML = name
    d.append(cr)
    let cr1 = document.createElement("li")
    cr1.innerHTML = age
    d.append(cr1)
    let cr3 = document.createElement("li")
    cr3.innerHTML = work
    d.append(cr3)
}
btn1.addEventListener("click",
    () => {
        // fill("avnish","22","i am the topper")


        let name = prompt("enter the name")
        let age = Number(prompt("enter the age"))
        let work = prompt("enter your work")

        fill(name, age, work)
    }
)
btn2.addEventListener("click",
    () => {
        // fill("avnish","22","i am the topper")
        let name = prompt("enter the name")
        let age = Number(prompt("enter the age"))
        let work = prompt("enter your work")

        fill2(name, age, work)
    }
)
btn3.addEventListener("click",
    () => {
        let container = document.getElementsByClassName("c")
        Array.from(container).forEach((e) => {
            e.style.backgroundColor = "yellow"
            e.style.Color = "red"
        })
    }
)
let li = document.querySelector('.listbin')

let list = document.createElement("li")
list.innerHTML = "services"
li.append(list)