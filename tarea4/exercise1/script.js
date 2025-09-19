const API_KEY = "0205402d5f504cc5b6c211514251809";
const citySelect = document.getElementById("city");
citySelect.addEventListener("change", mostrarClima);
  

function mostrarClima() {
  const city = citySelect.value;
  if (!city) {
    document.querySelector(".weather-icon").style.display = "none";
    return;
  }
  const data2 = async () => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&lang=es`
    );
    const data = await response.json();
    return data;
  };

  data2().then((data2) => {
    // ICON
    const icon = document.querySelector(".weather-icon");
    icon.style.display = "block";
    console.log(data2.current.condition.icon);
    icon.src = `https:${data2.current.condition.icon}`;
    
    // TEMPERATURA
    const temperature = document.querySelector(
      ".weather-temperature-value"
    );
    const temperatureType = document.querySelector(
      ".weather-temperature-type"
    );
    const temperatureCelsius = data2.current.temp_c;
    temperature.textContent = temperatureCelsius;
    temperatureType.textContent = "°C";
    
    // PROB. DE PRECIPITACIÓN
    const precipitation = document.querySelector(
      ".weather-precipitation"
    );
    const precipitationProbability =
      data2.forecast.forecastday[0].day.daily_chance_of_rain;
    precipitation.textContent = `Prob. de precipitaciones: ${precipitationProbability}%`;
    
    // HUMEDAD
    const humidity = document.querySelector(".weather-humidity");
    const humidityValue = data2.current.humidity;
    humidity.textContent = `Humedad: ${humidityValue}%`;
    
      // VIENTO
    const wind = document.querySelector(".weather-wind");
    const windkph = data2.current.wind_kph;
    wind.textContent = `Viento: ${windkph} km/h`;

    // LUGAR
    const location = document.querySelector(".weather-location-city");
    location.textContent = data2.location.name;

    // DÍA, HORA Y MINUTO
    const currentTime = document.querySelector(".weather-location-time");
    const dias = [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ];
    const now = new Date();
    const time = now.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });
    currentTime.textContent = `${dias[now.getDay()]}, ${time}`;

    // CONDICIÓN CLIMÁTICA
    const description = document.querySelector(".weather-description");
    description.textContent = data2.forecast.forecastday[0].day.condition.text;
  });
}