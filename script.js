$(document).ready(function () {

    // Saving value from input
    $("#inputBtn").on("click", function() {
        var inputVal = $("#inputCity").val();
        console.log(inputVal);

        $("#inputCity").val("");
    })

    $("#inputCity").on("keypress", function (e) {
        if (e.which == 13) {
            var inputVal = $("#inputCity").val();
            console.log(inputVal);
    
            $("#inputCity").val("");
        }
    })







})

