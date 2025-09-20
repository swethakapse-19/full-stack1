console.log("=== Weather Info Fetcher Project  ===");

const cityCoords = {
  bangalore: { lat: 12.9716, lon: 77.5946 },
  delhi: { lat: 28.7041, lon: 77.1025 },
  mumbai: { lat: 19.0760, lon: 72.8777 },
  london: { lat: 51.5074, lon: -0.1278 },
  newyork: { lat: 40.7128, lon: -74.0060 }
};

document.getElementById("fetchBtn").addEventListener("click", () => {
  let city = document.getElementById("cityInput").value.toLowerCase();

  if (!cityCoords[city]) {
    document.getElementById("weather").innerHTML = "City not in list";
    return;
  }

  let coords = cityCoords[city];
  let url = https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.current_weather) {
        document.getElementById("weather").innerHTML = `
          <h3>Current Weather in ${city}</h3>
          <p>Temperature: ${data.current_weather.temperature}°C</p>
          <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
          <p>Time: ${data.current_weather.time}</p>
        `;
      } else {
        document.getElementById("weather").innerHTML = "No data available";
      }
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      document.getElementById("weather").innerHTML = "Error fetching weather";
    });
});
