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
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" +inputVal+ "&units=imperial&appid=15ebf37ef6d8f1fde1b506df67ad2edb"
        })
        .then(function(response) {
            console.log(response);
            var cityTitle = $("<h3>").addClass("card-title").text(response.city.name +" ("+ new Date().toLocaleDateString() + ")");
            var card = $("<div>").addClass("card");
            var cardBody = $("<div>").addClass("card-body");
            var temperature = $("<p>").addClass("card-text").text("Temperature: " +(Math.round(response.list[1].main.temp))+ " °F");
            var humidity = $("<p>").addClass("card-text").text("Humidity: " +response.list[1].main.humidity+ " %");
            var wind = $("<p>").addClass("card-text").text("Winds: " +response.list[1].wind.speed+ " MPH");
            var sprite = $("<img>").attr("src", "https://openweathermap.org/img/w/" +response.list[1].weather[0].icon+ ".png");
            // console.log(cityTitle);
            // console.log(card);
            // console.log(cardBody);
            // console.log(temperature);
            // console.log(humidity);
            // console.log(wind);
            // console.log(img);


            cityTitle.append(sprite);
            cardBody.append(cityTitle, temperature, humidity, wind);
            card.append(cardBody);
            $("#weatherContent").append(card);

            $("#fiveDayForecast").html("<h4 class='row m-3'>5-Day Forecast:</h4>");

            // Referencing all the days at noon for the 5 day forecast
            for (var i = 0; i < response.list.length; i++) {
                if (response.list[i].dt_txt.indexOf("12:00:00") !== -1) {
                    var castCol = $("<div>").addClass("col-md-2");
                    var castCard = $("<div>").addClass("card bg-primary text-white");
                    var castBody = $("<div>").addClass("card-body p-2");
                    var castTitle = $("<h5>").addClass("card-title").text(new Date(response.list[i].dt_txt).toLocaleDateString());
                    var castImg = $("<img>").attr("src", "https://openweathermap.org/img/w/" +response.list[i].weather[0].icon+ ".png");
                    var castTemperature = $("<p>").addClass("card-text").text("Temp: " +(Math.round(response.list[i].main.temp))+ " °F");
                    var castHumidity = $("<p>").addClass("card-text").text("Humidity: " +response.list[i].main.humidity+ " %");

                    castCol.append(castCard);
                    castCard.append(castBody);
                    castBody.append(castTitle, castImg, castTemperature, castHumidity);
                    $("#fiveDayForecast").append(castCol);

                }
            }
        
        })
    }





})

