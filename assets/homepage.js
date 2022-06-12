var userFormEl = document.querySelector(".card-body");
var nameInputEl = document.querySelector("#username");
var name = document.querySelector(".name");
var description = document.querySelector(".description");
var temp = document.querySelector(".temp");
var windIndex = document.querySelector(".wind");
var humidity = document.querySelector(".humidity");
var currentHour = moment().format('MMMM Do YYYY, h:mm:ss a');


function showDate() {
    var currentHour = document.querySelector(".CurrentTime")
    console.log(currentHour);

}

button.addEventListener("click", function () {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&units=imperial&appid=e04fbf348ab68f01c8da11552c3c99df")
        .then(response => response.json())

        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var windIndexValue = data['wind']['speed'];
            var humidityValue = data['main']['humidity'];
            var descValue = data['weather']['0']['description'];

            name.innerHTML = nameValue;
            temp.innerHTML = "The Current Temp is : " + tempValue;
            description.innerHTML = "Its : " + descValue;
            humidity.innerHTML = "The Humidity Level is : " + humidityValue;
            wind.innterHTML = "The wind value is : " + windIndexValue;
            console.log(nameValue);
            console.log(tempValue);
            console.log(descValue);
            console.log(humidityValue);
            console.log(windIndexValue);
        })

        .catch(err => alert("Please pick a city!"))

});



