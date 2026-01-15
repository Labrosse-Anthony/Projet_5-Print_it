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

let indexSlides = 0; // On commence au debut page 0 , mise a zero des slides .

// SÉLECTEURS (Le DOM)- On donne récupère les elements du DOM et pn tes stock dans des variables ( Ici les constantes )  .
const imageElement = document.querySelector(".banner-img");
const textElement = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// FONCTIONS .
function updateCarousel() {
    // image et texte .
    imageElement.src = "assets/images/slideshow/" + slides[indexSlides].image; // On selectionne l'element source des images .
    textElement.innerHTML = slides[indexSlides].tagLine; // On selectionne l'element texte dans le span .
    
    // Points .
    const dots = document.querySelectorAll(".dot"); // Creation constante dot pour les points du carouselle .
    dots.forEach(dot => dot.classList.remove("dot_selected")); // On retire la class qui indique le dot sélectionner .
    dots[indexSlides].classList.add("dot_selected"); // On rajoute la classe selectionné sur le point actuel .
}

function createDots() { // Creation des points 
    for (let i = 0; i < slides.length; i++) { // Boucle on commence i a 0 , tant que i est plus petit que le nombre d'images et a chaque fois on augmente i de 1 .
        let dot = document.createElement("div"); // Creations des points .
        dot.classList.add("dot"); // Ajoute la class permetant le style de point .
        
        // On ajoute l'ecouteur du click directement à la création !
        dot.addEventListener("click", () => {
            indexSlides = i;
            updateCarousel(); // La fonction qui permet de changer de slide .
        });
        
        dotsContainer.appendChild(dot); // ajoutes les points dans le conteneur dots ( html )
    }
    // Sélectionner le premier point après création .
    dotsContainer.children[0].classList.add("dot_selected");
}

// EXÉCUTION 
function init() {
    createDots(); // On crée les points au démarrage 
    
    // Flèche Gauche
    arrowLeft.addEventListener("click", () => { // Ajout d'un écouteur d'évènement sur la fleche gauche : ici au click .
        indexSlides--; // On recule de 1 
        if (indexSlides < 0) indexSlides = slides.length - 1; // On force le compteur a aller a la derniere image , effet boucle infinie 
        updateCarousel(); // On met a jours 
    });

    // Flèche Droite
    arrowRight.addEventListener("click", () => { // Ajout d'un écouteur d'évènement sur la fleche droite : ici au click .
        indexSlides++; // On avance de 1
        if (indexSlides >= slides.length) indexSlides = 0; // On avance Si on de passe la derniere image on retourne a la premiere
        updateCarousel(); // On met a jours
    });
}

init(); // Lancement du script