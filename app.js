let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.ul-div');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})


window.onscroll = function () {
    var top = window.scrollY;
    var header = document.getElementsByTagName('header');
    var offset = $("header").height();
    console.log(top);
    console.log(offset);

    if (top > offset) {
        header[0].classList.remove('top');
        header[0].classList.add('scrolled');
        console.log("ifHappened");
    } else {
        header[0].classList.remove('scrolled');
        header[0].classList.add('top');
        console.log("elseHappensd");
    }


};



$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
})