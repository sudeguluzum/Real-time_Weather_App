const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {

    const APIKey = 'ba460dd97aeec05bb099333f99360072';
    const city = document.querySelector('.search-box input').value;

    if (city == '')
        return;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}').then(response => response.json()).then(json => {
        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Sunny':
                image.src = 'img/sunny.png'
                break;
            case 'Rain':
                image.src = 'img/rain.png'
                break;
            case 'Storm':
                image.src = 'img/storm.png'
                break;
            case 'Cloud':
                image.src = 'img/cloud.png'
                break;
            case 'PartlyCloud-':
                image.src = 'img/partly-cloudy.png'
                break;

            default:
                image.src = 'img/partly-cloudy.png'

        }
        temperature.innerHTML = '${parseInt(json.main.temp)}<span>°C</span>';
        description.innerHTML = '${json.weather[0].description}';
        humidity.innerHTML = '${json.main.humidity}%';
        wind.innerHTML = '${parseInt(json.wind.speed)}Km/h';


    });
});