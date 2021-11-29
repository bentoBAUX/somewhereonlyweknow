$(document).ready(function () {
    $('#back-arrow').on('click', function () {
        $("body").fadeOut(1000, openHomePage);
    });
});

function openHomePage() {
    window.location = "/html/home.html";
}