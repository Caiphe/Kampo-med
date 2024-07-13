window.addEventListener('load', loadWindow);

function loadWindow(){
    setTimeout(function(){

        document.querySelector('.call-to-action-one').classList.add('fadeInUp');
        document.querySelector('.call-to-action-two').classList.add('fadeInUp');
        document.querySelector('.call-to-action-three').classList.add('fadeInUp');

    }, 200);
}

$('.slider').slick({
    draggable: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 800,
    arrows: true,
    dots: false,
    scroll: true,
    speed: 500,
    infinite: true,
    cssEase: 'ease-in-out',
    prevArrow: $('.prev-button'),
    nextArrow: $('.next-button'),
});

$('.testimonials-slider').slick({
    draggable: true,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 800,
    arrows: true,
    dots: false,
    scroll: true,
    speed: 500,
    infinite: true,
    cssEase: 'ease-in-out',
    prevArrow: $('.prev-testimonial'),
    nextArrow: $('.next-testimonial'),

    responsive: [{
        breakpoint: 750,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
    }
],
});