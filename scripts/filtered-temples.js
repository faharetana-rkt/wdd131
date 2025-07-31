const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 215278,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13745-thumb.jpg",
  },
  {
    templeName: "Nashville Tennessee",
    location: "Nashville, Tennesse, United States",
    dedicated: "2000, May, 21",
    area: 215278,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nashville-tennessee-temple/nashville-tennessee-temple-50097.jpg",
  },
  {
    templeName: "Oakland California",
    location: "Oakland, California, United States",
    dedicated: "1964, November, 17",
    area: 753474,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/oakland-california-temple/oakland-california-temple-2654-main.jpg",
  },
];



// function renderTemple(temple) {
//     const templeName = document.createElement("h3").innerHTML = temple.templeName;
//     const location = document.createElement("p").innerHTML = `Location: ${temple.location}`;
//     const dedicated = document.createElement("p").innerHTML = `Dedicated: ${temple.dedicated}`;
//     const size = document.createElement("p").innerHTML = `Size: ${temple.area} sq ft`;
//     const card = document.createElement("div");
//     card.classList.add("card");
//     const templeImage = document.createElement("img");
//     templeImage.setAttribute("alt", `This is the image of ${temple.templeName}`);
//     templeImage.setAttribute("src", `${temple.imageUrl}`);
//     templeImage.setAttribute("loading", "lazy");
//     card.appendChild(templeName);
//     card.appendChild(location);
//     card.appendChild(dedicated);
//     card.appendChild(size);
//     card.appendChild(templeImage);
//     cardContainer.appendChild(card);
// }

function renderTemple(temples) {
  const cardContainer = document.querySelector(".img-container");
  cardContainer.innerHTML = "";
  temples.forEach((temple) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h3>${temple.templeName}</h3>
                      <p><span class="label">Location:</span> ${temple.location}</p>
                      <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
                      <p><span class="label">Size:</span> ${temple.area} sq ft<p>
                      <img src="${temple.imageUrl}" alt="Image of ${temple.templeName}" loading="lazy">`;
    cardContainer.appendChild(card);
  });
}

renderTemple(temples);

const home = document.querySelector("#home");
const old = document.querySelector("#old");
const later = document.querySelector("#new");
const large = document.querySelector("#large");
const small = document.querySelector("#small");

home.addEventListener("click", () => {
  renderTemple(temples);
  const h2 = document.querySelector("h2");
  h2.innerHTML = "Home";
})

old.addEventListener("click", () => {
  renderTemple(temples.filter(temple => parseInt(temple.dedicated.slice(0, 4)) < 1900));
  const h2 = document.querySelector("h2");
  h2.innerHTML = "Old temples built before 1900";
})

later.addEventListener("click", () => {
  renderTemple(temples.filter(temple => parseInt(temple.dedicated.slice(0, 4)) > 2000));
   const h2 = document.querySelector("h2");
   h2.innerHTML = "New temples built after 2000";
})

large.addEventListener("click", () => {
  renderTemple(temples.filter(temple => temple.area > 90000));
  const h2 = document.querySelector("h2");
  h2.innerHTML = "Large temples over 90000 sq ft";
})

small.addEventListener("click", () => {
  renderTemple(temples.filter(temple => temple.area < 10000));
  const h2 = document.querySelector("h2");
  h2.innerHTML = "Small temples below 10000 sq ft";
})