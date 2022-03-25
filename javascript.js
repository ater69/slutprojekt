const key = "691b87c3afa544e5801120929221803";
const url = "http://api.weatherapi.com/v1";
async function weather() {
  let curentweather = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=" + key + "&q=stockholm"
  );
  let currentweatherjson = await curentweather.json();
  console.log(currentweatherjson);
  let temprature = currentweatherjson.current.temp_c;
  let city = currentweatherjson.location.name;
  let Last_updated = currentweatherjson.current.last_updated;
  let feelslike_c = currentweatherjson.current.feelslike_c;
  let gust_kph = currentweatherjson.current.gust_kph;
  let weather = document.getElementById("weather");
  weather.innerHTML += `<td>${city}</td>`;
  weather.innerHTML += `<td>${temprature}°C </td>`;
  weather.innerHTML += `<td>${feelslike_c}°C </td>`;
  weather.innerHTML += `<td>${gust_kph}km/h </td>`;
  weather.innerHTML += `<td>${Last_updated}</td>`;
}

weather();
