const key = "691b87c3afa544e5801120929221803";
const url = "http://api.weatherapi.com/v1";
async function weather() {
  let curentweather = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=" + key + "&q=stockholm"
  );
  let currentweatherjson = await curentweather.json();
  console.log(currentweatherjson);
  let temprature = currentweatherjson.current.temp_c;
  let Last_updated = currentweatherjson.current.last_updated;
  let feelslike_c = currentweatherjson.current.feelslike_c;
  let gust_kph = currentweatherjson.current.gust_kph;
  let weather = document.getElementById("weather");
  weather.innerHTML += `<ul>Last updated: ${Last_updated}</ul>`;
  weather.innerHTML += `<ul>Temprature: ${temprature}°C </ul>`;
  weather.innerHTML += `<ul>It feelslike: ${feelslike_c}°C </ul>`;
  weather.innerHTML += `<ul>Wind speeds: ${gust_kph}km/h </ul>`;
}

weather();
