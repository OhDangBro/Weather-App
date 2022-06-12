var userFormEl = document.querySelector(".card-body");
        var nameInputEl = document.querySelector("#username");
        var name = document.querySelector(".name");
        var description = document.querySelector(".description");
        var temp = document.querySelector(".temp");
        var windIndex = document.querySelector(".wind");
        var humidity = document.querySelector(".humidity");

        button.addEventListener("click",function() {
            

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=e04fbf348ab68f01c8da11552c3c99df")
    .then(response => response.json())
    .then(data => console.log(data))

    .catch(err => alert("Please pick a city!"))

        });
    

