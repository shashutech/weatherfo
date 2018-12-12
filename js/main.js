$(document).ready(function(){

    //Adding event to form submit
    $('#search-form').submit(function(e){
        $('.weather-output').css('display', 'block');
        $('.introduction').css('display', 'none');
        var input = $('#form-search').val();
        input = input.toLowerCase();
        
        // Creating an ajax get request
        var searchURL = "http://api.openweathermap.org/data/2.5/weather?q="+ input +"&APPID=65529846dae7ce2080934eed38d40b9d";
        $.get(searchURL, function(response, status){
            
            //response values
            var tempValue = Math.round(response.main.temp -273.15); //temp returned in Kelvin scale
            var tempText = response.weather[0].main;
            var tempArea = response.name;
            var tempAreaCountry = (response.sys.country);


            //displaying output
            $('#temp-value').html(tempValue);
            $('#temp-text').html(tempText);
            $('#temp-area').html(tempArea+ ',');
            $('#temp-area-country').html(tempAreaCountry);

            console.log(response);
        });
        e.preventDefault();
    });

    $('.counter').counterUp();

});