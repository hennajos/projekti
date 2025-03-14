document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".get_entries");
    const cardArea = document.querySelector(".card-area2");

    cardArea.style.display = "flex";
    cardArea.style.flexWrap = "wrap";
    cardArea.style.gap = "20px";
    cardArea.style.justifyContent = "center";

    button.addEventListener("click", async () => {
        try {
            const url = "/diary.json";
            const response = await fetch(url);
            if (!response.ok) throw new Error("Virhe ladattaessa tietoja");
            
            const items = await response.json();
            renderCards(items);
        } catch (error) {
            console.error("Virhe:", error);
        }
    });

    function renderCards(entries) {
        cardArea.innerHTML = "";
        entries.forEach(entry => {
            const card = document.createElement("div");
            card.classList.add("card");
            
            // Asetetaan flexbox-tyylit kortille
            card.style.display = "flex";
            card.style.alignItems = "center";
            card.style.border = "1px solid #ccc";
            card.style.padding = "15px";
            card.style.borderRadius = "10px";
            card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
            card.style.backgroundColor = "#fff";
            card.style.maxWidth = "400px";
            card.style.flex = "1 1 300px";

            const cardImg = document.createElement("div");
            cardImg.classList.add("card-img");
            const img = document.createElement("img");
            img.src = "/img/kortti.jpeg";
            img.alt = "Kortin kuva";
            img.style.width = "80px";
            img.style.height = "80px";
            img.style.borderRadius = "50%";
            img.style.marginRight = "15px";
            cardImg.appendChild(img);
            
            const cardDiary = document.createElement("div");
            cardDiary.classList.add("card-diary");
            cardDiary.innerHTML = `
                <h4>Date: ${entry.entry_date}</h4>
                <p><strong>Mood:</strong> ${entry.mood}</p>
                <p><strong>Weight:</strong> ${entry.weight} kg</p>
                <p><strong>Sleep:</strong> ${entry.sleep_hours} hours</p>
                <p><strong>Notes:</strong> ${entry.notes}</p>
            `;
            
            card.appendChild(cardImg);
            card.appendChild(cardDiary);
            cardArea.appendChild(card);
        });
    }
});
