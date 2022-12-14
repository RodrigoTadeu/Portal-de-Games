const sectionCards = document.getElementById('additionsCards');


export function getDlcList(response) {
    
    for (let i = 0; i < response.results.length; i++) {
        const dlcCard = document.createElement("div");
        dlcCard.classList.add("dlcCard");
        sectionCards.append(dlcCard);
        
        const dlcImg = document.createElement("img");
        dlcImg.classList.add("dlcImg");
        dlcImg.src = response.results[i].background_image;
        dlcCard.append(dlcImg);
        
        const dlcTitle = document.createElement("h2");
        dlcCard.append(dlcTitle);
        dlcTitle.textContent = response.results[i].name;
        
        const dlcDate = document.createElement("p");
        dlcDate.classList.add("dlcDate");
        dlcDate.innerHTML = response.results[i].released;
        dlcCard.append(dlcDate);
        
        const dlcNote = document.createElement("p");
        dlcNote.classList.add("dlcNote");
        dlcNote.innerHTML = response.results[i].ratings[0].title.toUpperCase();
        dlcCard.append(dlcNote);
    }
}