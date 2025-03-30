*** Settings ***
Library     Browser    auto_closing_level=KEEP

*** Variables ***
${URL}             http://localhost:5173/login.html  
${USERNAME}        testikäyttäjä
${PASSWORD}        salasana123

*** Test Cases ***
Testaa Kirjautuminen
    New Browser    chromium    headless=No  
    New Page       ${URL} 
    Get Title      ==    Kirjaudu  

    # Syötä käyttäjätunnus ja salasana
    Type Text      id=username    ${USERNAME}  
    Type Text      id=password    ${PASSWORD}  

    # Paina kirjautumispainiketta
    Click         css=button[type="submit"]  

    

