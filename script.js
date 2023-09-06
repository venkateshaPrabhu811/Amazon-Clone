const slides = document.querySelectorAll(".slide")
const leftBtn = document.querySelector('.slider-left-btn')
const rightBtn = document.querySelector('.slider-right-btn')
let currSlide = 1;


function addSliderImages(){
    slides.forEach((sl) =>{
        sl.style.backgroundImage = `url(/assets/slider/slider-image-${sl.dataset.slide}.jpg)`
    })
}

function acitveSlide(slide = 1){
    slides.forEach((sl,index) =>{
        sl.style.transform = `translateX(${100 * (index - slide + 1)}%)`
    })
}

function nextSlide(){
    if(currSlide == 5){
        currSlide = 1;
    }
    else{
        ++currSlide;
    }
    acitveSlide(currSlide);
}

function prevSlide(){
    if(currSlide == 1){
        currSlide = 5;
    }
    else{
        --currSlide;
    }
    acitveSlide(currSlide);
}

leftBtn.addEventListener('click',prevSlide)
rightBtn.addEventListener('click',nextSlide);

addSliderImages()
acitveSlide()