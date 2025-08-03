const favchap = document.querySelector("#favchap");
const addButton = document.querySelector("button");
const list = document.querySelector("#list");

addButton.addEventListener("click", () => {
  if (favchap.value.trim() !== "") {
    displayList(favchap.value);
    chaptersArray.push(favchap.value);
    setChapterList();
    favchap.value = "";
    favchap.focus();
  } else {
    alert("Please enter a scripture!");
    favchap.focus();
  }
});

let chaptersArray = getChapterList() || [];
chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

function displayList(item) {
  const scripture = document.createElement("li");
  const deleteButton = document.createElement("button");
  scripture.innerHTML = item;
  deleteButton.textContent = "❌";
  scripture.appendChild(deleteButton);
  list.appendChild(scripture);
  deleteButton.addEventListener("click", () => {
    list.removeChild(scripture);
    deleteChapter(scripture.textContent);
    favchap.focus();
  });
};

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}
