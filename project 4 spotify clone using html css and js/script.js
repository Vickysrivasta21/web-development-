function opennav(){
    let nav = document.body.querySelector('.second-half2')
    if(nav.style.display=='none')
    {
        nav.style.display = 'flex'
        nav.style.maxHeight = '50vh'
    }
    else{
        nav.style.display = 'none'
    }
    // alert('you got clicked')
}
var audio = null

async function playsongs(){
    let x = await fetch('http://127.0.0.1:3000/project%204%20spotify%20clone%20using%20html%20css%20and%20js/songs/')
    let response = await x.text();

    let div = document.createElement('div')
    div.innerHTML = response
    let songs = []
    let as = div.getElementsByTagName('a')
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3"))
        songs.push(element.href)
    }
    return songs
}
async function main(){
    let song = await playsongs()
    console.log(song)
    audio = new Audio(song[1]);
    audio.play();


    // audio.addEventListener("loadeddata",()=>{
    //     console.log(audio.duration, audio.currentSrc)
    // })
}
document.body.querySelector('.play').addEventListener('click',()=>{
    main()
})
// document.body.querySelector('.play').addEventListener('click',()=>{
//     pause(
// })