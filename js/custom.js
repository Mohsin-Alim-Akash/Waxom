$(function(){
// banner slider
$('.banner-conten-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed:2000,
    arrows:false,
});

// Service slider
$('.service-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed:2000,
    arrows:false,
});

// Blog slider
$('.blog-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:true,
    centerMode:true,
    //centerPadding:false,
    prevArrow:'.left',
    nextArrow:'.right',
});

// Brand slider
$('.brand-main').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
});

// project
$('.venobox').venobox();

// mixitup
var containerEl = document.querySelector('.project-main');
var mixer = mixitup(containerEl);

// counterup js
$('.counter').counterUp({
    delay: 5,
    time: 2000
});
          





});