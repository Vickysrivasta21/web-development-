

function createcard(title, chname, views, months, thumbnail, timeduration) {
    document.querySelector('.title').innerHTML =title
    document.querySelector('.channel').innerHTML = chname
    let v = document.querySelector('.view')
    if(views<10000)
    {
        v.innerHTML = (views/100).toFixed(1) + "k"
    }
    else if(views<100000)
    {
        v.innerHTML = (views/1000).toFixed(1) + "k"
    }
    else
    {
        v.innerHTML = (views/10000).toFixed(1) + "M"
    }
    document.querySelector('.months').innerHTML = months
    document.querySelector('.img img')?.setAttribute('src',thumbnail)
    document.querySelector('.timeduration').innerHTML = timeduration
}

createcard("introduction to backend | introduction to OOPS concept and artificial intelligence and machine learning","code with Avnish ( computing logix)",2000,"1 year ago","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw%22%29","48:22")
