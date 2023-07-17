const inputbox = document.querySelector(".input-box")
const buttonsearch = document.getElementById("searchBtn")
const temperature = document.querySelector(".temperature")
const weather_img = document.querySelector(".weather-img")
const description = document.querySelector(".description")
const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind-speed")
const locationnotfound= document.querySelector(".locationnotfound")
const weather_body= document.querySelector(".weather-body")
async function checkWeather(city) {
  let api_key = "700e469659faf7a117a20a74920700d4";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

  const wheather_data = await fetch(`${url}`).then(response => response.json())
  // .catch(err => console.log(err))

  if(wheather_data.code==="404"){
    locationnotfound.style.display = "flex";
    weather_body.style.display=  "none";
    console.log("error")
    return
  }
  weather_body.style.display=  "flex";

  temperature.innerHTML = `${Math.round(wheather_data.main.temp - 273.15)}°C`

  description.innerHTML = `${wheather_data.weather[0].description}`
  console.log(wheather_data)
  humidity.innerHTML = `${wheather_data.main.humidity}`
  wind.innerHTML = `${wheather_data.wind.speed}km/H`

  switch(wheather_data.weather[0].main){
    case "Clouds":
      weather_img.src = "/assets/cloud.png";
      break;
      case "Rain":
        weather_img.src = "/assets/rain.png";
        break;
        case "Mist":
          weather_img.src = "/assets/mist.png";
          break;
          case "Clear":
            weather_img.src = "/assets/sunny.png";
            break;
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(inputbox.value);
})  
