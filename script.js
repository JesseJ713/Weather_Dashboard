$(document).ready(function () {

    // Saving value from input through button
    $("#inputBtn").on("click", function() {
        var inputVal = $("#inputCity").val();
        // console.log(inputVal);
        $("#inputCity").val("");
        getWeather(inputVal);
    })

        // Saving value from input through 'enter' keypress
    $("#inputCity").on("keypress", function (e) {
        if (e.which == 13) {
            var inputVal = $("#inputCity").val();
            // console.log(inputVal);
            $("#inputCity").val("");
            getWeather(inputVal);
        }
    })

    // Retrieving weather data from API
    function getWeather (inputVal) {
        $.ajax({
            type: "GET",
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" +inputVal+ "&appid=15ebf37ef6d8f1fde1b506df67ad2edb"
        })
        .then(function(response) {
            // console.log(response);
            
        })
    }





})

