// create a variable
// let, const and var

// Let allows you to create a variable that can be changed later

// let age = 10;
// age = 15;

// console.log(age);

// Const allows you to create a variable that cannot be changed later
// const price = 20000
// price = 1000

// console.log(price);


// defining variables
const mainImage = document.getElementById("mainImage");

const thumbnails = document.querySelectorAll(".thumbnail");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// store all product images 
const images = [
    "images/freepik__a-nigerian-traditional-wear-with-black-background__87258.png",
    "images/freepik__a-tailor-back-ground-with-black-background__69765.png",
    "images/freepik__suits-with-a-black-background__13120.png",
    "images/WhatsApp Image 2026-03-25 at 10.07.10 PM.jpeg",
    "image/ solar-services-mages copy.jpeg"
]

let currentIndex = 0;

// change  the main image

function showImage(index) {

// fade out
mainImage.style.opacity = 0

setTimeout(() => {
    mainImage.src = images[currentIndex]

    // fade in 
    mainImage.style.opacity = 1
}, 150)

// Remove the active class from the thumbnails

thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove('active');
});

// add active class to selected thumbnails
thumbnails[currentIndex].classList.add('active')
};

// click of the thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        showImage(index)
    });
});