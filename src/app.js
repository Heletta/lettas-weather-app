function displayTemperature(response) {
  console.log(response.data);
  let tempElement = document.querySelector("#temp");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  tempElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "5e43efbfa939a4c99oedee942bt0f90f";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={Accra}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
