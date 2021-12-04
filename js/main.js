
let slides = document.querySelector(".slides");
let slide = document.querySelectorAll('.slides li');
let currentidx = 0;
let slideCount = slide.length;
let boxWidth = 200;
let boxMargin = 30;
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector(".next");

function makeClone(){
    for(let i = 0; i<slideCount; i++){
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.appendChild(cloneSlide);
    }
    for(let i = slideCount -1; i>=0; i--){
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.prepend(cloneSlide);
    }
}

makeClone();