import '../css/login.css';
import '../css/snackbar.css';
import {fetchData} from './fetch.js';

// Esimerkin takia haut ovat nyt suoraan tässä tiedostossa, jotta harjoitus ei sekoita
// teidän omaa projektin rakennetta

const registerUser = async (event) => {
  event.preventDefault();

  const registerForm = document.querySelector('.registerForm');

  const username = registerForm.querySelector('#username').value.trim();
  const password = registerForm.querySelector('#password').value.trim();
  const email = registerForm.querySelector('#email').value.trim();

  const bodyData = { username, password, email };

  try {
    // Lähetetään rekisteröintipyyntö
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(bodyData),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.error || 'Rekisteröinti epäonnistui');
    }

    console.log(responseData.message, 'success');
    registerForm.reset(); // Tyhjennetään lomake

    // Automaattinen kirjautuminen rekisteröinnin jälkeen
    const loginResponse = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const loginData = await loginResponse.json();

    if (!loginResponse.ok) {
      throw new Error('Kirjautuminen epäonnistui rekisteröinnin jälkeen');
    }

    localStorage.setItem('token', loginData.token);
    localStorage.setItem('nimi', loginData.user.username);

    // Ohjataan päiväkirjaan
    //window.location.href = "diary.html";

  } catch (error) {
    console.error(error.message);
  }
};

const loginUser = async (event) => {
  event.preventDefault();

  // Haetaan oikea formi
  const loginForm = document.querySelector('.loginForm');

  const username = loginForm.querySelector('#username').value.trim();
  const password = loginForm.querySelector('#password').value.trim();

  // Luodaan body lähetystä varten taustapalvelun vaatimaan muotoon
  const bodyData = {
    username: username,
    password: password,
  };

  // Endpoint
  const url = 'http://localhost:3000/api/auth/login';

  // Options
  const options = {
    body: JSON.stringify(bodyData),
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
  };
  console.log(options);

  // Hae data
  const response = await fetchData(url, options);

  if (response.error) {
    console.error('Error adding a new user:', response.error);
    return;
  }

  if (response.message) {
    console.log(response.message, 'success');
    localStorage.setItem('token', response.token);
    localStorage.setItem('nimi', response.user.username);
  }

  console.log(response);
  loginForm.reset(); // tyhjennetään formi

  // ohjataan päiväkirjasivulle kirjautumisen jälkeen
  //window.location.href = "diary.html";

};

const checkUser = async (event) => {
  event.preventDefault();

  // Endpoint
  const url = 'http://localhost:3000/api/auth/me';
  // Kutsun headers tiedot johon liitetään tokeni
  let headers = {};

  // Nyt haetaan Token localstoragesta
  const token = localStorage.getItem('token');

  // Muodostetaa nyt headers oikeaan muotoon
  headers = {Authorization: `Bearer ${token}`};

  // Options
  const options = {
    headers: headers,
  };
  console.log(options);

  // Hae data
  const response = await fetchData(url, options);

  if (response.error) {
    console.error('Error getting personal data:', response.error);
    return;
  }

  if (response.message) {
    console.log(response.message, 'success');
  }
  console.log(response);
};

document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.querySelector('.registerForm');
  const loginForm = document.querySelector('.loginForm');
  const meRequest = document.querySelector('#meRequest');

  // Add event listeners
  if (registerForm) registerForm.addEventListener('submit', registerUser);
  if (loginForm) loginForm.addEventListener('submit', loginUser);
  if (meRequest) meRequest.addEventListener('click', checkUser);
});

//const registerForm = document.querySelector('.registerForm');
//registerForm.addEventListener('submit', registerUser);

//const loginForm = document.querySelector('.loginForm');
//loginForm.addEventListener('submit', loginUser);

// const meRequest = document.querySelector('#meRequest');
// meRequest.addEventListener('click', checkUser);
