# COMP4537_Lab1
# Simple Note-Taking Web App

This is a simple note-taking web application that allows users to add, edit, and remove notes, with all data stored in HTML5 `localStorage` using JSON. The app is built using pure JavaScript, HTML, CSS, and Bootstrap, with no server-side scripts. This app is composed of three pages: 

1. `index.html`: The landing page with navigation links to the `writer.html` and `reader.html` pages.
2. `writer.html`: A page for creating, editing, and removing notes. Notes are automatically saved to `localStorage` every 2 seconds, and the last saved time is displayed.
3. `reader.html`: A page for retrieving and displaying the notes stored in `localStorage`. The page automatically refreshes the displayed notes every 2 seconds, and the last retrieval time is displayed.

## Features
- **Add, edit, remove notes**: Users can dynamically add new notes, edit existing ones, and remove them.
- **Automatic saving**: Notes are automatically saved to `localStorage` every 2 seconds.
- **Data retrieval**: The `reader.html` page retrieves and displays notes every 2 seconds without requiring a page refresh.
- **LocalStorage**: Notes are stored in JSON format in `localStorage` and persist across page reloads or sessions within the same browser.

## Folder Structure
```bash
.
├── css
│   └── style.css           # Styling for the web app
├── js
│   ├── index.js            # JavaScript for index.html
│   ├── reader.js           # JavaScript for reader.html
│   └── writer.js           # JavaScript for writer.html
├── lang
│   └── messages
│       └── en
│           └── user.js     # Contains user-facing messages for localization
├── index.html               # Landing page
├── reader.html              # Page for retrieving and viewing notes
└── writer.html              # Page for adding, editing, and removing notes
