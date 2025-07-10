const favchap = document.querySelector("#favchap");
const addButton = document.querySelector("button");
const list = document.querySelector("#list");

addButton.addEventListener("click", () => {
    const scripture = document.createElement("li");
    const deleteButton = document.createElement("button");
    scripture.innerHTML = favchap.value;
    deleteButton.textContent = "❌";
    scripture.appendChild(deleteButton);
    list.appendChild(scripture);
    deleteButton.addEventListener("click", () => list.remove());
    favchap.textContent = "";
    favchap.focus();
});
