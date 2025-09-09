sequenceDiagram
    participant Browser
    participant Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate Server
    Server-->>Browser: HTML document
    deactivate server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate Server
    Server -->>Browser: CSS file
    deactivate server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate Server
    Server -->>Browser: JS file
    deactivate Server

    note right of Browser: Browser execute spa.js, and Js xode requests notes data

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate Server
    Server -->>Browser: [{contwnt: '', time: ''},{}]
    deactivate Server

    note right of Browser: JS code dynamuícally renders notes, without reaload the page