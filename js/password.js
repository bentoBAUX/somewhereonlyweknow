let validPassword = false;

document.querySelector(".numberInput").addEventListener("input", function (e) {

    // Exclude non-numeric characters from input:
    e.target.value = e.target.value.replace(/[^0-9]/g, '');

    // If the input value is filled and there is a neighbouring element that is input, then focus on that element:
    if (e.target.value !== "" && e.target.nextElementSibling && e.target.nextElementSibling.nodeName === "INPUT") {
        e.target.nextElementSibling.focus();
    }

});


$("input[type='text'], textarea").on("keyup", function () {
    if ($(this).val() != "") {

        //stringing inputs together
        var completeString = "";
        $('input').each(function () {
            completeString += $(this).val();
        });

        //check pw
        checkPassword(completeString);

    }
});


function checkPassword(password) {
    if (password == "1802") {
        validPassword = true;
        document.getElementById("d1").className = document.getElementById("d1").className + ' valid';
        document.getElementById("d2").className = document.getElementById("d2").className + ' valid';
        document.getElementById("d3").className = document.getElementById("d3").className + ' valid';
        document.getElementById("d4").className = document.getElementById("d4").className + ' valid';

        $("body").fadeOut(1000, openHomePage);

    } else {
        validPassword = false;
        document.getElementById("d1").className = document.getElementById("d1").className + ' invalid';
        document.getElementById("d2").className = document.getElementById("d2").className + ' invalid';
        document.getElementById("d3").className = document.getElementById("d3").className + ' invalid';
        document.getElementById("d4").className = document.getElementById("d4").className + ' invalid';
    }
    console.log(validPassword);
}

function openHomePage() {
    window.location = "somewhereonlyweknow/html/home.html";
}


