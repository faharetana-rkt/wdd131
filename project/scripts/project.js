const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");
hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});



const aircrafts = [
  {"ICAO_Code": "F22", "Registration": "07-4149", "Hex_Code": "AE5412", "Operator": "USAF"},
  {"ICAO_Code": "F35", "Registration": "17-5262", "Hex_Code": "AE4321", "Operator": "USMC"},
  {"ICAO_Code": "F16", "Registration": "90-0771", "Hex_Code": "AC1234", "Operator": "USAF"},
  {"ICAO_Code": "F15", "Registration": "89-0487", "Hex_Code": "AC5678", "Operator": "USAF"},
  {"ICAO_Code": "F15E", "Registration": "89-0489", "Hex_Code": "AC5679", "Operator": "USAF"},
  {"ICAO_Code": "F18", "Registration": "163946", "Hex_Code": "AD1357", "Operator": "USN"},
  {"ICAO_Code": "F18E", "Registration": "168567", "Hex_Code": "AD2468", "Operator": "USN"},
  {"ICAO_Code": "F18F", "Registration": "169876", "Hex_Code": "AD3579", "Operator": "USN"},
  {"ICAO_Code": "EUFI", "Registration": "30+01", "Hex_Code": "4B1234", "Operator": "Luftwaffe"},
  {"ICAO_Code": "RAFA", "Registration": "2001", "Hex_Code": "4B2345", "Operator": "French Air Force"},
  {"ICAO_Code": "SU57", "Registration": "07001", "Hex_Code": "AE6543", "Operator": "Russian Air Force"},
  {"ICAO_Code": "SU35", "Registration": "35001", "Hex_Code": "AE7654", "Operator": "Russian Air Force"},
  {"ICAO_Code": "MIG29", "Registration": "29001", "Hex_Code": "AE8765", "Operator": "Russian Air Force"},
  {"ICAO_Code": "MIG31", "Registration": "31001", "Hex_Code": "AE9876", "Operator": "Russian Air Force"},
  {"ICAO_Code": "J39", "Registration": "39001", "Hex_Code": "AE0987", "Operator": "Swedish Air Force"},
  {"ICAO_Code": "A10", "Registration": "78-0658", "Hex_Code": "AE9876", "Operator": "USAF"},
  {"ICAO_Code": "A320", "Registration": "D-AIPX", "Hex_Code": "3C6756", "Operator": "Lufthansa"},
  {"ICAO_Code": "A21N", "Registration": "N1035A", "Hex_Code": "A4A385", "Operator": "American Airlines"},
  {"ICAO_Code": "A359", "Registration": "F-WZFN", "Hex_Code": "3E5BA3", "Operator": "Airbus (Test)"},
  {"ICAO_Code": "A35K", "Registration": "F-WZFM", "Hex_Code": "3E5BA4", "Operator": "Airbus (Test)"},
  {"ICAO_Code": "A388", "Registration": "F-WWDD", "Hex_Code": "3E5B12", "Operator": "Airbus (Test)"},
  {"ICAO_Code": "B738", "Registration": "N831NN", "Hex_Code": "A4E5F6", "Operator": "Southwest"},
  {"ICAO_Code": "B38M", "Registration": "N8705S", "Hex_Code": "ADB23C", "Operator": "Alaska Airlines"},
  {"ICAO_Code": "B744", "Registration": "N606UA", "Hex_Code": "A4A31E", "Operator": "United Airlines"},
  {"ICAO_Code": "B748", "Registration": "D-ABYD", "Hex_Code": "3C679A", "Operator": "Lufthansa"},
  {"ICAO_Code": "B752", "Registration": "N12345", "Hex_Code": "A4E123", "Operator": "Delta Air Lines"},
  {"ICAO_Code": "B763", "Registration": "N34567", "Hex_Code": "A4E456", "Operator": "United Airlines"},
  {"ICAO_Code": "B77W", "Registration": "A6-EQM", "Hex_Code": "8965D4", "Operator": "Emirates"},
  {"ICAO_Code": "B789", "Registration": "N787EX", "Hex_Code": "A4B3F6", "Operator": "Norwegian"}
];

const searchInput = document.querySelector(".search-input");
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    console.log(searchInput.value);
  }
});