//

const apiKey = "9384f52d685e11de01e40017d52bc800";

const form = document.querySelector(".form-container form");
const cityInput = document.querySelector("form #city-input");

const cities = document.querySelector(".Weather");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = cityInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { main, name, sys, weather } = data;
      console.log(main);
      const weatherDiv = document.createElement("div");
      weatherDiv.className = "weather-info";
      weatherDiv.innerHTML = `
      <h4>
      <span>${name}</span>
      <span class='country'>${sys.country}</span>
      </h4>
      <img src='https://openweathermap.org/img/wn/${weather[0].icon}@2x.png' alt='icon'/>
      <div>
      <h5>${weather[0].main}</h5>
      <h5 class='temp'>Temp: ${main.temp}</h5>
      <h5>Humidity: ${main.humidity}%</h5>
      </div>
      `;
      cities.appendChild(weatherDiv);
    });
});
