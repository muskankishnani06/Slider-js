let images = [
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1016/800/400",
    "https://picsum.photos/id/1018/800/400",
    "https://picsum.photos/id/1020/800/400",
    "https://images.pexels.com/photos/19160119/pexels-photo-19160119.jpeg"
];

let index = 0

let sliderImg = document.getElementById("sliderImg")
document.getElementById("next").addEventListener("click", function () {

    index++;

    if (index >= images.length) {
        index = 0
    }

    sliderImg.src = images[index]
})

document.getElementById("prev").addEventListener("click", function () {

    index--;

    if (index < 0) {
        index = images.length - 1
    }

    sliderImg.src = images[index]


})

setInterval(function () {
    index++;

    if (index >= images.length) {
        index = 0
    }

    sliderImg.src = images[index]


}, 3000)