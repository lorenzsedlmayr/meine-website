const slides = [

{
img: "./images/projekt1.jpg",
title: "Projekt 1"
},

{
img: "./images/projekt2.jpg",
title: "Projekt 2"
},

{
img: "./images/projekt3.jpg",
title: "Projekt 3"
}

]

let index = 0

const image = document.getElementById("slide-image")
const title = document.getElementById("slide-title")

function updateSlide(){

image.src = slides[index].img
title.textContent = slides[index].title

}

function nextSlide(){

index++

if(index >= slides.length){
index = 0
}

updateSlide()

}

function prevSlide(){

index--

if(index < 0){
index = slides.length - 1
}

updateSlide()

}

/* KEYBOARD */

document.addEventListener("keydown", e => {

if(e.key === "ArrowRight") nextSlide()
if(e.key === "ArrowLeft") prevSlide()

})

/* CLICK NAVIGATION */

document.addEventListener("click", e => {

if(e.clientX > window.innerWidth / 2){
nextSlide()
}else{
prevSlide()
}

})
