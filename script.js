const images = [
    "bild1.jpg",
    "bild2.jpg",
    "bild3.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

function changeImage() {
    index = (index + 1) % images.length;
    slide.src = images[index];
}

setInterval(changeImage, 4000);
