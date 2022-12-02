const sectionCards = document.getElementById('achievementsCards');

export async function getAchievementsList(response) {
    for (let i = 0; i < response.results.length; i++) {

        const achievementsCard = document.createElement("div");
        achievementsCard.classList.add("achievementsCard");
        sectionCards.append(achievementsCard);

        const achievementsName = document.createElement("h2");
        achievementsName.classList.add("achievementsName");
        achievementsCard.append(achievementsName);
        achievementsName.textContent = response.results[i].name;

        const divider = document.createElement("div");
        divider.classList.add("divDivider");
        achievementsCard.append(divider);

        const achievementsDescription = document.createElement("p");
        achievementsDescription.classList.add("achievementsDescription");
        achievementsCard.append(achievementsDescription);
        achievementsDescription.textContent = response.results[i].description;
    }
}