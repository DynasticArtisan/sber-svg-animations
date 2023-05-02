import './style.css'

const images = document.querySelectorAll('img')
const sources = []
images.forEach(img => sources.push( img.src))

function reset(){
    let str = "?reset=" + Math.random()
    images.forEach((img, idx) => {
        img.src = sources[idx] + str
    })
}

document.querySelector('.reset').addEventListener('click', reset)