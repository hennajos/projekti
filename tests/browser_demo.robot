*** Settings ***
Library     Browser    auto_closing_level=KEEP
Resource    Keywords.robot  

*** Test Cases ***
Test Web Form
    New Browser    chromium    headless=No  
    New Page       https://www.selenium.dev/selenium/web/web-form.html 
    Get Title      ==    Web form 
    Type Text      [name="my-text"]        ${Username}    delay=0.1 s 
    Type Secret    [name="my-password"]    $Password      delay=0.1 s
    Type Text      [name="my-textarea"]    ${Message}     delay=0.1 s
  
    # Dropdown (select)
    Select Options By    css=[name="my-select"]    value    1  

    # Datalist (autocomplete)
    Fill Text    css=[name="my-datalist"]    San Francisco 
    Wait For Elements State    css=option[value="San Francisco"]    visible    timeout=5s
    Click    css=#my-options option

    # File input
    Set Input Files    css=[name="my-file"]    ${FILE_PATH}

    # Checkbox
    Check Checkbox    css=#my-check-1  

    # Radio button
    Check Radio Button    css=#my-radio-2  

    # Lähetä lomake
    Click    css=button[type="submit"]  
    Wait For Elements State    css=#message    visible    timeout=5s  
    Get Text       css=#message    ==    Received!
