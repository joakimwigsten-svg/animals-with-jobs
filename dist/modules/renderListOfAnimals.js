import renderAnimalInfo from "./renderAnimalInfo.js";
export default function renderListOfAnimals(animals) {
    const ul = document.querySelector(".list-of-animals ul");
    ul.innerHTML = "";
    animals.forEach((animal) => {
        const li = document.createElement("li");
        li.textContent = animal.name;
        li.addEventListener("click", () => renderAnimalInfo(animal));
        ul.appendChild(li);
    });
}
