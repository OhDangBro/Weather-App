
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
var cityValues = []
var catOne = document.querySelector(".catOne");
var catTwo = document.querySelector(".catTwo");
var catThree = document.querySelector(".catThree");
var catFour = document.querySelector(".catFour");
var catFive = document.querySelector(".catFive");










function showDate() {
    var currentHour = document.querySelector(".CurrentTime")
    console.log(currentHour);

}

button.addEventListener("click", function (event) {
    
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +  inputValue.value +"&units=imperial&appid=e04fbf348ab68f01c8da11552c3c99df")
       
    .then(response => response.json())
        
      

        .then(data => {
            console.log(data);
            // console.log(inputValue.value);
            cityValues.push(inputValue.value);
            console.log(cityValues)
            localStorage.setItem("cityKey", cityValues);
            $(".list-groupss").append(`<li class="list-group-item">${inputValue.value}</li> `);
    

// Retrieve the object from localStorage
var retrievedObject = localStorage.getItem('cityKey', cityValues);

            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var windIndexValue = data.wind.speed;
            var humidityValue = data['main']['humidity'];
            var descValue = data.weather[0].description;
            latitude = data.coord.lat;
            longitude = data.coord.lon;

            cityVal.innerHTML =" " + "Currently in " + nameValue + ": ";
            temp.innerHTML = " " + " with a current temp of  : " + tempValue + " ";
            description.innerHTML = " " +  " were seeing " + descValue + " " ;
            humidity.innerHTML = " " +  " with a humidity level of : " + humidityValue + " ";
            windIndex.innerHTML =" " +  " and a wind speed of: " + windIndexValue + " ";
            
            fiveDayForecast(latitude,longitude);
        })

        .catch(err => alert("Please pick a city!"))

});

function fiveDayForecast(lat,long) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ long +"&cnt=100&units=imperial&appid=e04fbf348ab68f01c8da11552c3c99df")
    .then(response => response.json())
    
   
    .then(data => {
        console.log(data)

        var dayOneValue = "The temperature is  " + data.daily[0].temp.day;
        var dayTwoValue ="The temperature will be  " +  data.daily[1].temp.day;
        var dayThreeValue ="The temperature will be  " +  data.daily[2].temp.day;
        var dayFourValue ="The temperature will be  " +  data.daily[3].temp.day;
        var dayFiveValue ="The temperature will be  " +  data.daily[4].temp.day;
        var humidityValue = data.daily[0].uvi;
        // if (humidityValue < 2) {
        //     append.catOne.class = text-justify;
        //   } else if (humidityValue  = 3,4,5,6,7) {
        //     var element = document.getElementById("catsOne");
        //     element.catsOne.add("text-justify");
        //   } else { (humidityValue > 8)
        //     append.catOne.class = text-justify;
           
        //   }
        var humidityValueTwo = data.daily[1].uvi;
        var humidityValueThree = data.daily[2].uvi;
        var humidityValueFour = data.daily[3].uvi;
        var humidityValueFive = data.daily[4].uvi;
        console.log(humidityValue);
        catOne.innerHTML = "The UV index is : " + humidityValue;
        catTwo.innerHTML = "The UV index will be : " + humidityValueTwo;
        catThree.innerHTML = "The UV index will be : " + humidityValueThree;
        catFour.innerHTML = "The UV index will be : " + humidityValueFour;
        catFive.innerHTML = "The UV index will be : " +  humidityValueFive;
        function UV() { 
            var goodUvIndex = [4,5,6,7];
            if (goodUvIndex >= 3) {
              document.getElementById("catsOne").classList.add('text-secondary');
            }
            else if (goodUvIndex = 4,5,6,7)
            {
              document.getElementById("catsOne").classList.add('text-success');
            }  
            else if (goodUvIndex)  
            {
              document.getElementById("catsOne").classList.add('text-danger');
            }
        };

       UV();
        
        
        

            dayOne.innerHTML = dayOneValue;
            dayTwo.innerHTML = dayTwoValue;
            dayThree.innerHTML = dayThreeValue;
            dayFour.innerHTML = dayFourValue;
            dayFive.innerHTML = dayFiveValue;
            var iconcode = data.daily[0].weather[0].icon;
            var iconcodeTwo = data.daily[1].weather[0].icon;
            var iconcodeThree = data.daily[2].weather[0].icon;
            var iconcodeFour = data.daily[3].weather[0].icon;
            var iconcodeFive = data.daily[4].weather[0].icon;
            var iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            var iconUrlTwo = "http://openweathermap.org/img/w/" + iconcodeTwo + ".png";
            var iconUrlThree = "http://openweathermap.org/img/w/" + iconcodeThree + ".png";
            var iconUrlFour = "http://openweathermap.org/img/w/" + iconcodeFour + ".png";
            var iconUrlFive = "http://openweathermap.org/img/w/" + iconcodeFive + ".png";
            var dateOneValue = moment().format("MMM Do YYYY");
            dateOne.innerHTML = dateOneValue;

            var dateTwoValue = moment().add(1, 'days').calendar(); ;     
            dateTwo.innerHTML = dateTwoValue;
           
            var dateThreeValue = moment().add(2, 'days').calendar(); ;     
            dateThree.innerHTML = dateThreeValue;

            var dateFourValue = moment().add(3, 'days').calendar(); ;     
            dateFour.innerHTML = dateFourValue;

            var dateFiveValue = moment().add(4, 'days').calendar(); ;     
            dateFive.innerHTML = dateFiveValue;




            $('#wicon').attr('src', iconUrl);
            $('#wiconTwo').attr('src', iconUrlTwo);
            $('#wiconThree').attr('src', iconUrlThree);
            $('#wiconFour').attr('src', iconUrlFour);
            $('#wiconFive').attr('src', iconUrlFive);
           
            


            

    });
    console.log(dayOneValue)
    console.log(dayTwoValue)

}

