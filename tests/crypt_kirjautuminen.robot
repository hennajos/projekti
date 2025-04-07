*** Settings ***
Library     Browser     	    auto_closing_level=SUITE
Library     CryptoLibrary     variable_decryption=True

*** Variables ***
${Username}    crypt:kX7n2UPo3PRaWShZihyJBS9FOIOINNMmsfYIsnMstS2hS65olVLgKvgOX1MMvYEQLWXVvGo=
${Password}    crypt:g6cU2IF+Pf7WKSt2m/1tOzpe20mlGUn1Qf6mbJ/AKG2+aJGxzqjNKHWPEvHhYhc9bYtVHAdQ/osW
${Message}     Hello, Robot Framework!\nHow are you today?

*** Test Cases ***
Test Web Form
    Set Password    Salasana1
    New Browser     chromium    headless=No
    New Context     viewport={'width': 800, 'height': 600}
    New Page        http://localhost:5173/login.html 
    Get Title       ==    Web form  
    Type Text      id=username    ${Username}  
    Type Text      id=password    ${Password} 
    Click With Options    button                           delay=2 s
