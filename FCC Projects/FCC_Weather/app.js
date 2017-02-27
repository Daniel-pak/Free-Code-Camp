//User Story: I can see the weather in my current location.

//User Story: I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.
//
//User Story: I can push a button to toggle between Fahrenheit and Celsius.

//get long and Lat 
//match with keys 

var lat;
var long;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        console.log(lat);
        console.log(long);
        gettingData();
    })
};

function gettingData() {
    $.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=fd137452295d8fe3711ec348a4807b80`, function (object) {
        $('#location').html(object.name + ", " + object.sys.country);
        var temp = parseInt(object.main.temp - 273.15);
        var tempC = (temp * 9/5) + 32;
        var weather = object.weather[0]['main'];
        $("#temp_change").html(`${temp} <p>C</p>`);
        $("#typeOf").html(weather);
        tempChanger(temp, tempC);
        gifSelect(weather);
    });
};

function tempChanger(temp, tempC)  {
    $("#temp_change").on("click", function () {
        var texts = $("#temp_change").text();
        texts = texts.substring(texts.length - 1, texts.length);
            if (texts === "C") { 
                $("#temp_change").html(`${tempC} <p>F</p>`);
            } else if (texts === "F") { 
                $("#temp_change").html(`${temp} <p>C</p>`)
            }
        })
}

function gifSelect(weather) { 
    if ($("#typeOf").html() === "Clouds") { 
        $("#giffy").attr("src", "https://media.giphy.com/media/FxepFnt8AglBS/giphy.gif");
    }
    else if ($("#typeOf").html() === "Sun") { 
        $("#giffy").attr("src", "https://media.giphy.com/media/lPtKdQ6JMO06Y/source.gif");
    } else if ($("#typeOf").html() === "Mist") { 
        $("#giffy").attr("src", "https://media2.giphy.com/media/ZCXiW2s6NdAY0/200.gif#99");
    }
	else if ($("#typeOf").html() === "Clear") { 
        $("#giffy").attr("src", "https://media.giphy.com/media/WQoFIAhZQAgBa/giphy.gif");
    }
}
