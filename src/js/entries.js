import {fetchData} from './fetch';

const getEntries = async () => {
  console.log('Moikka, maailma');
  console.log('Haetaan paikallisesta tiedostosta');

  // haetaan alue joho luodaan kortit
  const diaryContainer = document.getElementById('diary');
  console.log(diaryContainer);

  // haetaan data joko json tai fetch rajapinnasta
  const url = 'http://localhost:3000/api/auth/entries';
  const response = await fetchData(url);

  if (response.error) {
    console.log('Tapahtui virhe entries fetch haussa!!');
    return;
  }

  console.log(response);

  // looppi jossa luodaan yksittäiset kortit
  diaryContainer.innerHTML = '';
  response.forEach((entry) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardDiary = document.createElement('div');
    cardDiary.classList.add('card-diary');
    cardDiary.innerHTML = `
      <p><strong>Date:</strong> ${entry.entry_date}</p>
      <p><strong>Mood:</strong> ${entry.mood}</p>
      <p><strong>Weight:</strong> ${entry.weight} kg</p>
      <p><strong>Sleep:</strong> ${entry.sleep_hours} hours</p>
      <p><strong>Notes:</strong> ${entry.notes}</p>
      <p><strong>Meal:</strong> ${entry.meal}</p>

    `;

    card.appendChild(cardDiary);
    diaryContainer.appendChild(card);
  });
};

// Uuden päiväkirjamerkinnän lisäys
const addEntry = async (event) => {
  event.preventDefault();

  const entry_date = document.getElementById('entry_date').value;
  const mood = document.getElementById('mood').value;
  const weight = document.getElementById('weight').value;
  const sleep_hours = document.getElementById('sleep_hours').value;
  const meal = document.getElementById('meal').value;
  const notes = document.getElementById('notes').value;

  const newEntry = {
    entry_date,
    mood,
    weight,
    sleep_hours,
    meal,
    notes,
  };

  const url = 'http://localhost:3000/api/auth/entries';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newEntry),
  };

  const response = await fetchData(url, options);

  if (response.error) {
    console.log('Virhe lisättäessä merkintää!');
    return;
  }

  document.getElementById('diary-form').reset();
  getEntries();
};

document.querySelector('.get_entries').addEventListener('click', getEntries);
document.getElementById('diary-form').addEventListener('submit', addEntry);

export {getEntries};
