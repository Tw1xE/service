document.addEventListener("DOMContentLoaded", function () {
  const getWeatherButton = document.getElementById("get-weather");
  const locationInput = document.getElementById("location");
  const weatherResult = document.getElementById("weather-result");

  getWeatherButton.addEventListener("click", function () {
    const location = locationInput.value;

    // Simulate a request to the Weather Service (in a real microservices architecture, this would be an API call).
    const fakeWeatherData = {
      temperature: "25°C",
      conditions: "Sunny",
      location: location,
    };

    // Display weather information on the web page.
    weatherResult.innerHTML = `Weather in ${fakeWeatherData.location}: ${fakeWeatherData.temperature}, ${fakeWeatherData.conditions}`;
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const getWeatherButton = document.getElementById("get-weather");
  const locationInput = document.getElementById("location");
  const weatherResult = document.getElementById("weather-result");

  getWeatherButton.addEventListener("click", function () {
    const location = locationInput.value;

    // Simulate a request to the Weather Service (in a real microservices architecture, this would be an API call).
    const fakeWeatherData = {
      temperature: "25°C",
      conditions: "Sunny",
      location: location,
    };

    // Display weather information on the web page.
    weatherResult.innerHTML = `Weather in ${fakeWeatherData.location}: ${fakeWeatherData.temperature}, ${fakeWeatherData.conditions}`;
  });
});
