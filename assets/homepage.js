// Values for selecting //
var cityVal = document.querySelector(".cityVal");
var description = document.querySelector(".description");
var temp = document.querySelector(".temp");
var windIndex = document.querySelector(".winds");
var humidity = document.querySelector(".humidity");
var currentHour = moment().format('MMMM Do YYYY, h:mm:ss a');
var catOne = document.querySelector(".catOne");
var catTwo = document.querySelector(".catTwo");
var catThree = document.querySelector(".catThree");
var catFour = document.querySelector(".catFour");
var catFive = document.querySelector(".catFive");
var dayOne = document.querySelector(".dayOne");
var dayTwo = document.querySelector(".dayTwo");
var dayThree = document.querySelector(".dayThree");
var dayFour = document.querySelector(".dayFour");
var dayFive = document.querySelector(".dayFive");

//Value for input of lat and lon grabbed from first API, input into second //
var latitutde = "";
var longitude = "";

// value for local storage //
var cityValues = []


//Function for dates //
function showDate() {
    var currentHour = document.querySelector(".CurrentTime")
    console.log(currentHour);

}

//Button event listener for searching and connecting to API//
button.addEventListener("click", function (event) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +  inputValue.value +"&units=imperial&appid=e04fbf348ab68f01c8da11552c3c99df")
       .then(response => response.json())
        .then(data => {
            console.log(data);
            cityValues.push(inputValue.value);
            localStorage.setItem("cityKey", cityValues);
            $(".list-groupss").append(`<li class="list-group-item">${inputValue.value}</li> `);
    

            // Retrieve the object from localStorage
            var retrievedObject = localStorage.getItem('cityKey', cityValues);
            // Values of data retrieved from first API //
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var windIndexValue = data.wind.speed;
            var humidityValue = data['main']['humidity'];
            var descValue = data.weather[0].description;
            latitude = data.coord.lat;
            longitude = data.coord.lon;

            //Input of text and values above to be shown on "Cur Weath"//
            cityVal.innerHTML =" " + "Currently in " + nameValue + ": ";
            temp.innerHTML = " " + " with a current temp of  : " + tempValue + " ";
            description.innerHTML = " " +  " were seeing " + descValue + " " ;
            humidity.innerHTML = " " +  " with a humidity level of : " + humidityValue + " ";
            windIndex.innerHTML =" " +  " and a wind speed of: " + windIndexValue + " ";
            
            //Grabs lat and long from first API //
            fiveDayForecast(latitude,longitude);
        })
        //Alert telling to pick city //
        .catch(err => alert("Please pick a city!"))

});
//Function  to grab second API and input lat & lon //
function fiveDayForecast(lat,long) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon="+ long +"&cnt=100&units=imperial&appid=e04fbf348ab68f01c8da11552c3c99df")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // Temp value from Api //
        var dayOneValue = "The temperature is  " + data.daily[0].temp.day;
        var dayTwoValue ="The temperature will be  " +  data.daily[1].temp.day;
        var dayThreeValue ="The temperature will be  " +  data.daily[2].temp.day;
        var dayFourValue ="The temperature will be  " +  data.daily[3].temp.day;
        var dayFiveValue ="The temperature will be  " +  data.daily[4].temp.day;
        var humidityValue = data.daily[0].uvi;
       
        // Humidity Values from API //
        var humidityValueTwo = data.daily[1].uvi;
        var humidityValueThree = data.daily[2].uvi;
        var humidityValueFour = data.daily[3].uvi;
        var humidityValueFive = data.daily[4].uvi;
       
        //Humidity Value Input //
        catOne.innerHTML = "The UV index is : " + humidityValue;
        catTwo.innerHTML = "The UV index will be : " + humidityValueTwo;
        catThree.innerHTML = "The UV index will be : " + humidityValueThree;
        catFour.innerHTML = "The UV index will be : " + humidityValueFour;
        catFive.innerHTML = "The UV index will be : " +  humidityValueFive;

        //Function for changing text color dependent on UV index //
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
        // Function start from function UV() //
       UV();
        
        
        
            // Inpurs day values in Fiveday//
            dayOne.innerHTML = dayOneValue;
            dayTwo.innerHTML = dayTwoValue;
            dayThree.innerHTML = dayThreeValue;
            dayFour.innerHTML = dayFourValue;
            dayFive.innerHTML = dayFiveValue;
            
            // Grabs Icons from API for weather description //
            var iconcode = data.daily[0].weather[0].icon;
            var iconcodeTwo = data.daily[1].weather[0].icon;
            var iconcodeThree = data.daily[2].weather[0].icon;
            var iconcodeFour = data.daily[3].weather[0].icon;
            var iconcodeFive = data.daily[4].weather[0].icon;
            //Places Icons from API into FiveDay//
            var iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            var iconUrlTwo = "http://openweathermap.org/img/w/" + iconcodeTwo + ".png";
            var iconUrlThree = "http://openweathermap.org/img/w/" + iconcodeThree + ".png";
            var iconUrlFour = "http://openweathermap.org/img/w/" + iconcodeFour + ".png";
            var iconUrlFive = "http://openweathermap.org/img/w/" + iconcodeFive + ".png";
            
            //Date Values for FiveDay//
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



            //Inputs Icons for FiveDay //
            $('#wicon').attr('src', iconUrl);
            $('#wiconTwo').attr('src', iconUrlTwo);
            $('#wiconThree').attr('src', iconUrlThree);
            $('#wiconFour').attr('src', iconUrlFour);
            $('#wiconFive').attr('src', iconUrlFive);
           
            


            

    });
}

