*** Settings ***
Library     Browser    auto_closing_level=KEEP

*** Variables ***
${USERNAME}        testikäyttäjä
${PASSWORD}        salasana123
${MESSAGE}    Tämä on testiviesti.
${ENTRY_DATE}    30-03-2025
${MOOD}    Hyvä
${WEIGHT}    60
${SLEEP_HOURS}    8
${MEAL}    Omena
${NOTES}    Testimerkintä

*** Test Cases ***
Testaa Kirjautuminen
    New Browser    chromium    headless=No  
    New Page       http://localhost:5173/login.html
    Get Title      ==    Kirjaudu  

    # Syötä käyttäjätunnus ja salasana
    Type Text      id=username    ${USERNAME}  
    Type Text      id=password    ${PASSWORD}  

    # Paina kirjautumispainiketta
    Click         css=button[type="submit"]  

    # Sirry päiväkirjaan
    New Page       http://localhost:5173/diary.html
    Get Title      ==    Päiväkirja
    
    # Täytä päiväkirjamerkinnän lomake
    Type Text      css=#entry_date    ${ENTRY_DATE} 
    Type Text      css=#mood    ${MOOD}  
    Type Text      css=#weight    ${WEIGHT}  
    Type Text      css=#sleep_hours    ${SLEEP_HOURS}  
    Type Text      css=#meal    ${MEAL}  
    Type Text      css=#notes    ${NOTES}  

    # Lähetä lomake
    Click    css=button[type="submit"]


