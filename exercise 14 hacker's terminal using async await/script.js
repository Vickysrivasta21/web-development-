async function hackstart() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("initializing hacking...")
        }, Math.floor(Math.random() * 7000))
    })
}
async function read() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("reading your files...")
        }, Math.floor(Math.random() * 7000))
    })
}
async function passdetect() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("password files detected....")
        }, Math.floor(Math.random() * 7000))
    })
}
async function send() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("sending data to servers...")
        }, Math.floor(Math.random() * 7000))
    })
}
async function cleaning() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("cleaning up")
        }, Math.floor(Math.random() * 7000))
    })
}
async function hackersterminal() {
    let task = await hackstart()
    let h2 = document.createElement('p')
    h2.textContent = `${task}`
    document.body.appendChild(h2)
    let task2 = await read()
    let h3 = document.createElement('p')
    h3.textContent = `${task2}`
    document.body.appendChild(h3)
    let task3 = await passdetect()
    let h4= document.createElement('p')
    h4.textContent = `${task3}`
    document.body.appendChild(h4)
    let task4 = await send()
    let h5 = document.createElement('p')
    h5.textContent = `${task4}`
    document.body.appendChild(h5)
    let task5 = await cleaning()
    let h6 = document.createElement('p')
    h6.textContent = `${task5} hacking done!!...`
    document.body.appendChild(h6)
}
hackersterminal()