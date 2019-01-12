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
var btn = document.getElementById('button');

    btn.addEventListener('click', function(){
        popup.style.display = "block";
        body.style.background = "rgba(0,0,0,0.4)";
    });

var body = document.body;

var popup = document.getElementById('popup');

var close = document.getElementById('close');

    close.addEventListener('click', function(){
        popup.style.display = "none";
        body.style.background = "rgba(0,0,0,0.0)";
    });