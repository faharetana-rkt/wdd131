const aircrafts = [
  {"Hex_Code":"7C4777","ICAO_Code":"B744","Aircraft_Name":"Boeing 747-438ER (Qantas)"},
  {"Hex_Code":"440820","ICAO_Code":"B767","Aircraft_Name":"Boeing 767-300ER (Japan Airlines)"},
  {"Hex_Code":"440392","ICAO_Code":"A350","Aircraft_Name":"Airbus A350-941"},
  {"Hex_Code":"C010F6","ICAO_Code":"A321","Aircraft_Name":"Airbus A321-211 (Air Canada)"},
  {"Hex_Code":"407FAC","ICAO_Code":"B738","Aircraft_Name":"Boeing 737-8 MAX (TUI Airways)"},
  {"Hex_Code":"800373","ICAO_Code":"B787","Aircraft_Name":"Boeing 787-9 (Korean Air)"},
  {"Hex_Code":"40782B","ICAO_Code":"A330","Aircraft_Name":"Airbus A330-941 (Discover Airlines)"},
  {"Hex_Code":"896533","ICAO_Code":"B737","Aircraft_Name":"Boeing 737-8 (Mercado Libre)"},
  {"Hex_Code":"AA7238","ICAO_Code":"B767","Aircraft_Name":"Boeing 767-300ER (Japan Airlines)"},
  {"Hex_Code":"000001","ICAO_Code":"A320","Aircraft_Name":"Airbus A320-214 (Swiss)"},
  {"Hex_Code":"4401DA","ICAO_Code":"B787","Aircraft_Name":"Boeing 787-9 (Air Canada)"},
  {"Hex_Code":"C02264","ICAO_Code":"Multiple","Aircraft_Name":"Various (historic/records)"},
  {"Hex_Code":"71F801","ICAO_Code":"Unknown","Aircraft_Name":"Mode S entry placeholder"},
  {"Hex_Code":"899139","ICAO_Code":"C130","Aircraft_Name":"Lockheed C-130H Hercules"},
  {"Hex_Code":"448465","ICAO_Code":"A320","Aircraft_Name":"Airbus A320-251N (SunExpress)"},
  {"Hex_Code":"3C6756","ICAO_Code":"A320","Aircraft_Name":"Airbus A320-214 (Lufthansa)"},
  {"Hex_Code":"4B1234","ICAO_Code":"EUFI","Aircraft_Name":"Eurofighter Typhoon (Luftwaffe)"}
];

const searchInput = document.querySelector(".search-input");
const codes = document.querySelector("#hex-codes");
const codeArray = [];
aircrafts.forEach(aircraft => {
  let hex = aircraft.Hex_Code;
  codeArray.push(hex);
});
codes.innerHTML = `${codeArray.join(", ")}`;

const url = "https://api.planespotters.net/pub/photos/hex/";
const imageContainer = document.querySelector('.aircraft-img');

async function fetchAircraftImage(url) {
  const response = await fetch(url);
  const data = await response.json();
  displayAircraft(data);
  // console.log(data);
};

// fetchAircraftImage(url);

function displayAircraft(data) {
  searchInput.value = "";
  imageContainer.innerHTML = "";
  imageContainer.innerHTML = `<img src="${data.photos[0].thumbnail_large.src}" alt="aircraft photo taken by ${data.photos[0].photographer}" loading="lazy">
                              <p><em>Photograph taken by ${data.photos[0].photographer}</em></p>`;
}

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (codeArray.includes(searchInput.value)) {
      let urlApi = `${url}${searchInput.value}`;
      fetchAircraftImage(urlApi);
    } else {
      imageContainer.innerHTML = `<h3 id="alert">❗❗❗ Please use the provided code above ⚠️⚠️⚠️</h3>`;
    }
  }
});
