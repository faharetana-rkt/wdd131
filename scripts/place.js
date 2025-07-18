function calculateWindchill (temp, speed) {
    let windchill;
    if (speed < 4.8 || temp > 10) {
        windchill = "N/A";
    } else {
        windchill = (13.12 + 0.6215*temp - 11.37*(speed^0.16) + 0.3965*temp*(speed^0.16)).toFixed(2);
    }
    return windchill
}

const windchill = document.querySelector("#wind-chill");
windchill.textContent = `${calculateWindchill(10, 5)}`;
