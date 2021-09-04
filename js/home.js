$(document).ready(function () {
    $('.ct-box-slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
    });
    $('#ct-js-box-slider--prev').on('click', function () {
        $('.ct-js-box-slider').slick('slickPrev');
    });
    $('#ct-js-box-slider--next').on('click', function () {
        $('.ct-js-box-slider').slick('slickNext');
    });
    $('.active-box').on('click', function () {
        $("body").fadeOut(1000, openeighteightPage);
    });

});

function openeighteightPage() {
    window.location = "eighteight.html";
}