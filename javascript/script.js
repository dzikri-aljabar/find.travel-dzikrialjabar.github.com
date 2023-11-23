const bannerSlide = document.getElementById('bannerSlide')

var i = 0
const images = [
    "assets/solo-traveling.png",
    "assets/img2.jpg",
    "assets/img3.jpg",
]

function bannerSlide(){
    i += 1
    if (i == images.lenght) {
        1 = 0
    }
    imageSlider.src = images (i)
}

setInterval(bannerSlide,1000)