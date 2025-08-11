const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");
hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});


const searchInput = document.querySelector(".search-input");
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    console.log(searchInput.value);
  }
});