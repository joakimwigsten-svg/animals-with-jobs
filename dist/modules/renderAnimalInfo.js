//Titta i index.html och hitta den div där info om varje djur ska skrivas ut.
//Typa upp funktionens parameter
export default function renderAnimalInfo(animal) {
    const container = document.querySelector(".animal-info");
    container.innerHTML = "";
    //Rendera ut bilden på djuret
    const img = document.createElement("img");
    img.src = `./images/${animal.imageUrl}`;
    img.alt = animal.name;
    //Skriv ut djurets namn och typ av djur. Följ det här formatet: "Gina the Giraffe"
    const nameAndType = document.createElement("h2");
    nameAndType.textContent = `${animal.name} the ${animal.kindOfAnimal}`;
    //Skriv ut djurets jobb och om djuret är anställd just nu eller inte.
    //Följ formatet: "Trash Analyst - Currently (not) employed"
    //Använd template literals
    const job = document.createElement("p");
    const isEmployed = !animal.employmentEndDate;
    job.textContent = `${animal.job} - Currently ${isEmployed ? "employed" : "not employed"}`;
    //Skriv ut djurets ålder (age). EJ året de är födda. Utan hur gamla de är.
    //Följ formatet:  Age: 9 years old.
    //Använd template literals
    //Bonus om du skriver ut rubriken "Age" med CSS.
    const currentYear = new Date().getFullYear();
    const age = currentYear - animal.birthYear;
    const ageElement = document.createElement("p");
    ageElement.textContent = `Age: ${age} years old`;
    //=====================================================//
    //=====================================================//
    //Skriv ut en lista på djurets färdigheter
    //Följ formatet:    Skills:
    //                  Flying
    //                  Eating
    //Bonus om du skriver ut rubriken "Skills" med CSS.
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
