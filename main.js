//

const apiKey = "9384f52d685e11de01e40017d52bc800";

const form = document.querySelector(".form-container form");
const cityInput = document.querySelector("form #city-input");

const cities = document.querySelector(".weekdays");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = cityInput.value;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { list, city } = data;
      list.forEach((item) => {
        console.log(item.dt_txt);
      });
    });
});
