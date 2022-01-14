let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.ul-div');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})


window.onscroll = function () {
    var top = window.scrollY;
    console.log('Top: ' + top);
    var header = document.getElementsByTagName('header');
    var offset = header.innerHeight;
    if (top > offset) {
        header[0].classList.remove('top');
        header[0].classList.add('scrolled');
    } else {
        header[0].classList.remove('scrolled');
        header[0].classList.add('top');
    }
};