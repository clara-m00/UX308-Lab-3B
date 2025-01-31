// Given a temperature in kelvin convert to fahrenheit.

function convertKelvinToFahrenheit(kelvin) {
    let fahrenheit = 1.8*(kelvin - 273.15)+32;
    return fahrenheit;
}

let kelvin = 1
console.log (`${kelvin} kelvin is ${convertKelvinToFahrenheit(kelvin)} fahrenheit`);

export {convertKelvinToFahrenheit}