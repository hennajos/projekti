# Ohjelmistotestaus
## Tehtävä 1

Asennettu front-endiin ja back-endiin:
- Robot Framework - Browser Library
- Requests library
- CryptoLibrary
- Robotidy

![Screenshot 2025-03-17 at 10 39 20](https://github.com/user-attachments/assets/9af77a70-9225-452f-b81e-952d44d11293)


![Screenshot 2025-03-17 at 10 42 24](https://github.com/user-attachments/assets/c6da0ef2-9d61-4593-938d-bdc4fde75665)


Asennus front-endiin:

![Screenshot 2025-03-19 at 9 11 48](https://github.com/user-attachments/assets/21c3f801-6332-4c3b-a18e-a835e3aafa24)

Asennus back-endiin:

![Screenshot 2025-03-17 at 11 04 41](https://github.com/user-attachments/assets/194bb280-39e0-41ca-bd50-0642c028373d)


## Tehtävä 2
Kirjautumistesti omalle terveyspäiväkirjasovellukselle.
Käytetty ChatGPT 4.0 antamaan testikoodille pohjan.

Robot-testikoodiin linkki:

[(https://github.com/hennajos/projekti/blob/test/tests/kirjautuminen.robot)
](https://github.com/hennajos/projekti/blob/test/tests/kirjautuminen.robot)

![Screenshot 2025-03-29 at 22 55 06](https://github.com/user-attachments/assets/431b9af1-d5db-4a38-bd39-55d672b9a256)

Tässä näkyy testikoodi ja tulos.

![Screenshot 2025-03-29 at 22 51 00](https://github.com/user-attachments/assets/9f55cfc2-2244-4a58-9ef8-d4dee16c7e1a)

Tässä näkyy Chromium-sivu.


## Tehtävä 3
Web form -sivun toiminta.
Käytetty ChatGPT 4.0 antamaan testikoodille pohjan testaamaan Dropdown (select), Dropdown (datalist), File input, Checkboxit ja Radio buttonit. Tekoäly auttoi myös debuggaamisessa.

Robot-testikoodiin linkki:

[https://github.com/hennajos/projekti/blob/test/tests/browser_demo.robot
](https://github.com/hennajos/projekti/blob/test/tests/browser_demo.robot)

![Screenshot 2025-03-24 at 21 20 16](https://github.com/user-attachments/assets/6375319b-5e23-4e9f-807a-787d6f12e9d1)

Web form -sivu

![Screenshot 2025-03-29 at 23 42 46](https://github.com/user-attachments/assets/a69cf11c-99ea-43ea-9a33-c5d4abdc5d9a)

Testauskoodi

![Screenshot 2025-03-29 at 23 47 25](https://github.com/user-attachments/assets/60678e95-16f9-47f2-a220-6c70dd74fc69)

Tulokset. Jostain syystä tuli tässä fail koko ajan.


## Tehtävä 4
Omaan terveyspäiväkirjasovellukseen päiväkirjamerkinnän tekeminen.
Käytetty ChatGPT 4.0 antamaan testikoodia ja debuggaamaan.

Robot-testikoodiin linkki:

[https://github.com/hennajos/projekti/blob/test/tests/paivakirja.robot
](https://github.com/hennajos/projekti/blob/test/tests/paivakirja.robot)

![Screenshot 2025-03-30 at 12 37 32](https://github.com/user-attachments/assets/31b82002-4675-4ca7-ba6c-72d4f9926769)

Testauskoodi

![Screenshot 2025-03-30 at 12 49 47](https://github.com/user-attachments/assets/f582d0c7-68ea-4a48-ba39-13d2ad7575f6)

Sivu robotilla täytettynä

![Screenshot 2025-03-30 at 12 49 05](https://github.com/user-attachments/assets/ea8ff222-dcde-4300-b0df-f53451a86f85)

Tulokset

## Tehtävä 5
Kirjautumistesti, joka käyttää ’.env’-tiedostoon piilotettuja käyttäjätunnusta ja salasanaa.

![Screenshot 2025-04-04 at 14 59 37](https://github.com/user-attachments/assets/965f76dd-64ad-4965-a462-7be30e07f465)

Testit

Linkki testikoodiin:

[https://github.com/hennajos/projekti/blob/test/tests/env_kirjautuminen.robot
](https://github.com/hennajos/projekti/blob/test/tests/env_kirjautuminen.robot)

## Tehtävä 6

kirjautumistesti, missä sekä salasana että käyttäjätunnus on kryptattu käyttäen CryptoLibrarya.
Käytetty ChatGPT 4.0 debuggauksessa. 

![Screenshot 2025-04-07 at 21 14 00](https://github.com/user-attachments/assets/a4bb2f8c-f28e-4cba-9561-26edc8e18e44)

Testissä tuli ongelmia kirjastojen kanssa vaikka aiemmin on toiminut. Yritän saada toimimaan.

![Screenshot 2025-04-07 at 21 13 35](https://github.com/user-attachments/assets/961c0228-12ad-4fc1-822f-b9a76bde02d4)

Linkki koodiin

[https://github.com/hennajos/projekti/blob/test/tests/crypt_kirjautuminen.robot
](https://github.com/hennajos/projekti/blob/test/tests/crypt_kirjautuminen.robot)

## Tehtävä 7

Ohjataan raportti- ja lokitiedostot outputs -kansioon.

![Screenshot 2025-04-11 at 15 49 02](https://github.com/user-attachments/assets/e629016c-f4a9-432f-9f24-ac0b3aada647)

Komento

![Screenshot 2025-04-11 at 15 49 16](https://github.com/user-attachments/assets/8b2475e8-f413-4c6d-bb14-b16d86b796eb)

Outputs -kansioon tulee raportti- ja lokitiedostot


