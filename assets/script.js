const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

let indexSlides = 0;

const imageElement = document.querySelector(".banner-img");
const textElement = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

function updateCarousel() {
    imageElement.src = "assets/images/slideshow/" + slides[indexSlides].image;
    textElement.innerHTML = slides[indexSlides].tagLine;
    
    // Points .
    const dots = document.querySelectorAll(".dot");
    dots.forEach(dot => dot.classList.remove("dot_selected"));
    dots[indexSlides].classList.add("dot_selected");
}

function createDots() { // Creation des points 
    for (let i = 0; i < slides.length; i++) {
        let dot = document.createElement("div");
        dot.classList.add("dot");
        
        dot.addEventListener("click", () => {
            indexSlides = i;
            updateCarousel();
        });
        
        dotsContainer.appendChild(dot);
    }
    dotsContainer.children[0].classList.add("dot_selected");
}

function init() {
    createDots();
    
    arrowLeft.addEventListener("click", () => {
        indexSlides--;
        if (indexSlides < 0) indexSlides = slides.length - 1;
        updateCarousel(); 
    });

    arrowRight.addEventListener("click", () => {
        indexSlides++;
        if (indexSlides >= slides.length) indexSlides = 0;
        updateCarousel();
    });
}

init();