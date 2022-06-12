const apiUrl = "32adaa67c2a8d2e40f3ba802329d956b";

var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);

    // get value from input element
var username = nameInputEl.value.trim();

if (username) {
  getUserRepos(username);
  nameInputEl.value = "";
} else {
  alert("Please enter a GitHub username");
}
  };

  

var getApi = function(user) {
    // format the github api url
   
  
    // make a request to the url
    fetch("api.openweathermap.org/data/2.5/weather?q="+inputvalue.Value+"appid=e04fbf348ab68f01c8da11552c3c99df"
    

        ).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      });
    });
  };

  userFormEl.addEventListener("submit", formSubmitHandler);



  
  getApi();

//   "https://api.openweathermap.org/data/2.5/onecall?lat=40.058323&lon=-74.405663&appid=e04fbf348ab68f01c8da11552c3c99df"