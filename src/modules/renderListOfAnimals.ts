
import { IAnimal } from "../modules/IAnimal.ts";
import renderAnimalInfo from './renderAnimalInfo.ts';

export default function renderListOfAnimals(animals: IAnimal[]): void {
    const ul = document.querySelector(".list-of-animals ul") as HTMLUListElement;
    ul.innerHTML = "";

    animals.forEach((animal) => {
        const li = document.createElement("li");
        li.textContent = animal.name;
        li.addEventListener("click", () => renderAnimalInfo(animal));
        ul.appendChild(li);
    });
}