// Convert a windspeed to  a description using The Beaufort Wind Scale.

function windspeedDescription(windspeed) {
    if (windspeed < 1)
        return "Calm wind; smoke rises vertically"; 

    else if (windspeed >= 1 && windspeed <= 3){
        return "Smoke drift indicates wind direction, vanes do not move";
    }

    else if (windspeed >= 4 && windspeed <=7 ) {
        return "Wind felt on face; leaves rustle; vanes begin to move";
    }

    else if (windspeed >=8 && windspeed <=12) {
        return "Leaves and small twigs in constant motion; light flags extended";
    }
        

    else if (windspeed >=13 && windspeed <=18) {
        return "Dust, leaves and loose paper raised up; small branches move";
    }

    else if (windspeed >=19 && windspeed <=24) {
        return "Small trees begin to sway";
    }

    else if (windspeed >=25 && windspeed <=31) {
        return "Large branches of trees in motion; whistling heard in wires";
    }

    else if (windspeed >=32 && windspeed <=38) {
        return "Whole trees in motion; resistance felt in walking against the wind";
    }

    else if (windspeed >=39 && windspeed <=46) {
        return "Twigs and small branches broken off trees";
    }

    else if (windspeed >=47 && windspeed <=54) {
        return "Slight structural damage occurs; slate blown from roofs";
    }

    else if (windspeed >=55 && windspeed <=63) {
        return "Seldom experienced on land; trees broken; structural damage occurs";
    }

    else if (windspeed >=64 && windspeed <=72) {
        return "Very rarely experienced on land; usually with widespread damage";
    }

    else if (windspeed >= 73) {
        return "Violence and destruction";
    }
} 

let windspeed = 5

console.log (`${windspeed} mph is described as ${windspeedDescription(windspeed)} using The Beaufort Wind scale`);


export {windspeedDescription}