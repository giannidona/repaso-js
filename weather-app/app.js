API_KEY = "87e00951b56828c80d6b5c723c03d2c5";

const inputPlace = document.getElementById("inputPlace");
const btnSearch = document.getElementById("btnSearch");

const condition = document.getElementById("climate");
const temp = document.getElementById("temp");
const place = document.getElementById("place");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const maxTemp = document.getElementById("maxTemp");
const minTemp = document.getElementById("minTemp");

btnSearch.addEventListener("click", async (e) => {
  e.preventDefault();
  const text = inputPlace.value;
  inputPlace.value = "";

  const place = await getPlace(text);
  return place;
});

async function getPlace(place) {
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}`
  );
  const data = await result.json();
  console.log(data);
  updateText({
    clima: data.weather[0].main,
    temp: kelvinToCelcius(data.main.temp),
    place: data.name,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    maxTemp: data.main.temp_max,
    minTemp: data.main.temp_min,
  });
  return data;
}

async function updateText(climate) {
  condition.innerText = climate.clima;
  temp.innerText = climate.temp + " ºC";
  place.innerText = climate.place;
  humidity.innerText = climate.humidity + "%";
  windSpeed.innerText = climate.windSpeed + " Km/h";
  maxTemp.innerText = climate.maxTemp;
  minTemp.innerText = climate.minTemp;
}

function kelvinToCelcius(temp) {
  return Math.round(temp - 273.15, 2);
}
