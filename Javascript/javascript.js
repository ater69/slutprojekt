const key = "691b87c3afa544e5801120929221803";
const url = "http://api.weatherapi.com/v1";
let search = document.getElementById("search");

async function getWeather() {
  var curentweather = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${key}&q=${search.value}`
  );
  var currentweatherjson = await curentweather.json();
  console.log(currentweatherjson);
  return currentweatherjson;
}

search.onkeydown = async function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    let currentweatherjson = await getWeather();
    let temprature = currentweatherjson.current.temp_c;
    let city = currentweatherjson.location.name;
    let Last_updated = currentweatherjson.current.last_updated;
    let feelslike_c = currentweatherjson.current.feelslike_c;
    let gust_kph = currentweatherjson.current.gust_kph;
    let weather = document.getElementById("Table");
    weather.insertAdjacentHTML(
      "beforeend",
      `<tr><td>${city}</td><td>${temprature}°C </td><td>${feelslike_c}°C </td><td>${gust_kph}km/h </td><td>${Last_updated}</td></tr>`
    );
    var scrollDiv = document.getElementById("botten").offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: "smooth" });
    search.value = "";
    getImage(city);
  }
};

async function getImage(city) {
  var cityimage = await fetch(
    `https://api.unsplash.com/search/photos/?query=${city}&client_id=nuPwijRDNMVGcLepg_BsD1rQmkzd-YFnTYrTkAeVJ5U`
  );
  let cityimagejson = await cityimage.json();
  let hero = document.getElementById("hero");
  hero.innerHTML = `<img src = "${cityimagejson.results[0].urls.full}">`;
  console.log(cityimage, cityimagejson);
}
