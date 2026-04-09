import { IAnimal } from "./IAnimal.ts";
export default function renderAnimalInfo(animal: IAnimal) {

  const container = document.querySelector(".animal-info") as HTMLDivElement;
  container.innerHTML = "";


  const img = document.createElement("img");
  img.src = `./images/${animal.imageUrl}`;
  img.alt = animal.name;


  const nameAndType = document.createElement("h2");
  nameAndType.textContent = `${animal.name} the ${animal.kindOfAnimal}`;



  const job = document.createElement("p");
  const isEmployed = !animal.employmentEndDate;
  job.textContent = `${animal.job} - Currently ${isEmployed ? "employed" : "not employed"}`;


  const currentYear = new Date().getFullYear();
  const age = currentYear - animal.birthYear;
  const ageElement = document.createElement("p");
  ageElement.textContent = `Age: ${age} years old`;

  const skillsTitle = document.createElement("h3");
  skillsTitle.textContent = "Skills:";

  const skillsList = document.createElement("ul");

  const skills = Array.isArray(animal.skills)
    ? animal.skills
    : [animal.skills];

  skills.forEach((skill) => {
    const skillItem = document.createElement("li");
    skillItem.textContent = skill;
    skillsList.appendChild(skillItem);
  });

  container.appendChild(img);
  container.appendChild(nameAndType);
  container.appendChild(job);
  container.appendChild(ageElement);
  container.appendChild(skillsTitle);
  container.appendChild(skillsList);

}
