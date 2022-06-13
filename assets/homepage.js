
var cityVal = document.querySelector(".cityVal");
var description = document.querySelector(".description");
var temp = document.querySelector(".temp");
var windIndex = document.querySelector(".winds");
var humidity = document.querySelector(".humidity");
var currentHour = moment().format('MMMM Do YYYY, h:mm:ss a');
var latitutde = "";
var longitude = "";
var dayOne = document.querySelector(".dayOne");
var dayTwo = document.querySelector(".dayTwo");
var dayThree = document.querySelector(".dayThree");
var dayFour = document.querySelector(".dayFour");
var dayFive = document.querySelector(".dayFive");





function showDate() {
    var currentHour = document.querySelector(".CurrentTime")
    console.log(currentHour);

}

button.addEventListener("click", function () {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +  inputValue.value +"&units=imperial&appid=e04fbf348ab68f01c8da11552c3c99df")
        .then(response => response.json())
      

        .then(data => {
            console.log(data);
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var windIndexValue = data.wind.speed;
            var humidityValue = data['main']['humidity'];
            var descValue = data.weather[0].description;
            latitude = data.coord.lat;
            longitude = data.coord.lon;

            cityVal.innerHTML = nameValue;
            temp.innerHTML = "The Current Temp is : " + tempValue;
            description.innerHTML = "Its : " + descValue;
            humidity.innerHTML = "The Humidity Level is : " + humidityValue;
            windIndex.innerHTML = "The wind value is : " + windIndexValue;
            // console.log(nameValue);
            // console.log(tempValue);
            // console.log(descValue);
            // console.log(humidityValue);
            // console.log(windIndexValue);
            fiveDayForecast(latitude,longitude);
        })

        .catch(err => alert("Please pick a city!"))

});

function fiveDayForecast(lat,long) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ long +"&cnt=10&units=imperial&appid=e04fbf348ab68f01c8da11552c3c99df")
    .then(response => response.json())
    .then(data => {
        

        var dayOneValue = data.daily[0].temp.day
        var dayTwoValue = data.daily[1].temp.day
        var dayThreeValue = data.daily[2].temp.day
        var dayFourValue = data.daily[3].temp.day
        var dayFiveValue = data.daily[4].temp.day

        dayOne.innerHTML = dayOneValue;
            dayTwo.innerHTML = dayTwoValue;
            dayThree.innerHTML = dayThreeValue;
            dayFour.innerHTML = dayFourValue;
            dayFive.innerHTML = dayFiveValue;

    });
    console.log(dayOneValue)
    console.log(dayTwoValue)
}