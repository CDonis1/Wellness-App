$(document).ready(function () {
    var long;
    var lat;
    var tempSwap = true;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            lat = position.coords.latitude;
            long = position.coords.longitude;

            var api =
                "https://fcc-weather-api.glitch.me/api/current?lat=" +
                lat +
                "&lon=" +
                long +
                "";

            $.getJSON(api, function (data) {
                var weatherType = data.weather[0].description;
                var c = data.main.temp;
                var city = data.name;

                fTemp = (c * 9 / 5 + 32).toFixed(1);


                $("#city").html(city);
                $("#weather").html(weatherType);
                $("#temp").html(c + "&#8451");
                $("#temp").click(function () {
                    if (tempSwap === false) {
                        $("#temp").html(fTemp + " &#8457");
                        tempSwap = true;
                    } else {
                        $("#temp").html(c + " &#8451");
                        tempSwap = false;
                    }

                });

                if (weatherType === "partly cloudy night") {
                    $('body').css('background-image', 'url(http://cdn.weatheravenue.com/img/background/background-night.jpg)');
                } else if (weatherType === "clear day") {
                    $('body').css('background-image', 'url(http://www.zastavki.com/pictures/640x480/2014/Nature___Seasons___Spring_Clear_day_in_spring_field_067763_29.jpg)');
                } else if (weatherType === "clear night") {
                    $('body').css('background-image', 'url(http://2il.org/wp-content/uploads/2015/12/CVqWELxWEAEEPsD.jpg)');
                } else if (weatherType === "rain") {
                    $("#body").css('background-image', 'url(https://i.ytimg.com/vi/J5OSRpRyl6g/maxresdefault.jpg)');
                } else if (weatherType === "snow" || weatherType === "sleet") {
                    $('body').css('background-image', 'url(https://vignette.wikia.nocookie.net/phobia/images/a/aa/Snow.jpg/revision/latest/scale-to-width-down/360?cb=20161109045734)');
                } else if (weatherType === "wind") {
                    $('body').css('background-image', 'url(http://weknowyourdreams.com/images/wind/wind-05.jpg)');
                } else if (weatherType === "fog" || weatherType === "haze") {
                    $('body').css('background-image', 'url(http://www.asiaone.com/sites/default/files/styles/700x500/public/original_images/Aug2016/20160827_hazesg_reuters.jpg?itok=-lyB37E-)');
                } else if (weatherType === "cloudy") {
                    $('body').css('background-image', 'url(https://s3-us-west-2.amazonaws.com/melingoimages/Images/17425.jpg)');
                } else if (weatherType === "partly cloudy day") {
                    $('body').css('background-image', 'url(http://miriadna.com/desctopwalls/images/max/Ideal-sky-reflection.jpg)');
                } else {
                    $('body').css('background-image', 'url(https://us.123rf.com/450wm/momanuma/momanuma0906/momanuma090600086/5108944-bavarian-landscape-with-away-on-a-nice-weather-day.jpg?ver=6)');
                }
            });
        });

    }
});