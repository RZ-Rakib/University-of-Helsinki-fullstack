sequenceDiagram
    participant User
    participant Browser
    participant Server

    Note right of User: text area into the form input

    User->>Browser: Click "Save"
    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Note right of Browser: body: note="HTML is easy"
    activate server
    Note right of the Server: Server reads body, validate and stores {content:"HTML is easy", date:..}
    Server-->>Browser: 302 Found, Redirect to https://studies.cs.helsinki.fi/exampleapp/notes
    deactive Server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes