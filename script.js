const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {
  const apiKey = '98740f4ebc0d63bc0f8ba70090e5a091'; // OpenWeather API anahtarınızı buraya ekleyin
  const city = document.querySelector('.search-box input').value;

  if (city == '') return;

  const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(json => {
      const image = document.querySelector('.weather-box img');
      const temperature = document.querySelector('.weather-box .temperature');
      const description = document.querySelector('.weather-box .description');
      const humidity = document.querySelector('.weather-box .humidity span');
      const wind = document.querySelector('.weather-box .wind span');

      // Burada JSON'dan gelen verileri kullanarak sayfanızı güncelleyebilirsiniz.

      switch (json.weather[0].main) {
        case 'Sunny':
          image.src = 'img/sunny.png';
          break;
        case 'Rain':
          image.src = 'img/rain.png';
          break;
        case 'Storm':
          image.src = 'img/storm.png';
          break;
        case 'Cloud':
          image.src = 'img/cloud.png';
          break;
        case 'PartlyCloud-':
          image.src = 'img/partly-cloudy.png';
          break;
        default:
          image.src = 'img/partly-cloudy.png';
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
    })
    .catch(error => {
      // Hata durumunda
      console.error('Error fetching data:', error);
    });
});
