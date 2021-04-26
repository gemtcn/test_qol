import $ from 'jquery';
import slick from 'slick-carousel';

$(document).ready(function () {
    // Main slider toppage
    $('.slider-main--list').slick({
        dots: false,
        nav: true,
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 2000,
    });

    // Toggle Menu
    $('#toggleMenu').on('click', function () {
        $(this).toggleClass('show');
        $('.header-main--menu').toggleClass('show');
        $('body').toggleClass('no-scroll');
    })
})