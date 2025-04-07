*** Settings ***
Library     Browser   
Library     OperatingSystem

Variables   load_env.py


*** Test Cases ***
Testaa kirjautuminen
    New Browser    chromium    headless=No  
    New Page       http://localhost:5173/login.html 
    Get Title      ==    Kirjaudu  

    # Hae käyttäjätunnus ja salasana ympäristömuuttujista
    ${USERNAME}    Get Environment Variable    USERNAME  
    ${PASSWORD}    Get Environment Variable    PASSWORD  

    # Syötä käyttäjätunnus ja salasana
    Type Text      id=username    ${USERNAME}  
    Type Text      id=password    ${PASSWORD}  

    # Paina kirjautumispainiketta
    Click         css=button[type="submit"]   
