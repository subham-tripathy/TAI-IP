const apiKey = "6d8fd1a54420fa828cadd8d10afd1318"
let input = 'gunupur'
const currentLocation = document.querySelector('#location')
const submitBTN = document.querySelector('button')
const cloudIMG = document.querySelector('#cloud')
const tempH1 = document.querySelector('#temp h1')
const tempP = document.querySelector('#temp p')
const humidity = document.querySelector('#humidity>div>h3')
const windSpeed = document.querySelector('#wind-speed>div>h3')
let fahrenheitTemp = 0
let celsiusTemp = 0






fetchWeather(input)
submitBTN.addEventListener('click', () => {
    let input = document.querySelector('#input').value
    fetchWeather(input)
})




function fetchWeather(input) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&unit=metric&appid=${apiKey}`).then(res => res.json()).then(data => {
        // console.log(data)

        currentLocation.textContent = data.name

        switch (data.weather[0].main) {
            case 'Clear':
                cloudIMG.src = './images/clear.png'
                break;
            case 'Rain':
                cloudIMG.src = './images/rain.png'
                break;
            case 'Snow':
                cloudIMG.src = './images/snow.png'
                break;
            case 'Clouds':
                cloudIMG.src = './images/cloud.png'
                break;
            case 'Mist':
                cloudIMG.src = './images/mist.png'
                break;
            case 'Haze':
                cloudIMG.src = './images/clear.png'
                break;
            default:
                cloudIMG.src = ''
                break;
        }

        fahrenheitTemp = parseInt((9 / 5) * (parseInt(data.main.temp) - 273) + 32)
        celsiusTemp = parseInt((fahrenheitTemp - 32) * (5 / 9))
        tempH1.innerHTML = `${fahrenheitTemp} <sup onclick=changeToFahrenheit()>°F</sup> | <sup onclick=changeToCelsius()>°C</sup>`
        tempP.textContent = data.weather[0].description
        humidity.textContent = data.main.humidity + '%'
        windSpeed.textContent = data.wind.speed
    })
}


function changeToFahrenheit() {
    tempH1.innerHTML = `${fahrenheitTemp} <sup onclick=changeToFahrenheit()>°F</sup> | <sup onclick=changeToCelsius()>°C</sup>`
}

function changeToCelsius() {
    tempH1.innerHTML = `${celsiusTemp} <sup onclick=changeToCelsius()>°C</sup> | <sup onclick=changeToFahrenheit()>°F</sup>`
}