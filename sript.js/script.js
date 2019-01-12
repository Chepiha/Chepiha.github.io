// button toTop!!
var toTop = document.getElementById('toTop');

window.onscroll = function(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
}

toTop.addEventListener('click', function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


// popUp!!
var button = document.getElementById('button');
var popUp = document.getElementById('popup');
var close = document.getElementById('close');
var backPop = document.getElementById('back')

    button.addEventListener('click', function(){
        popUp.style.display = "block";
        backPop.style.background = "rgba(0,0,0,0.4)";
        backPop.style.position = "fixed"	;	
    });
    
    close.addEventListener('click', function() {
        popUp.style.display = "none";
        backPop.style.background = "rgba(0,0,0,0.0)";
        backPop.style.position = "relative";		
    });

// slider!!!
var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}