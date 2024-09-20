/** 
DISCLOSURE: The initial structure of this code was generated with the help of ChatGPT. 
Subsequent modifications and improvements were made separately to meet specific project requirements.
*/

// Get the DOM element where notes will be displayed
const notesDisplay = document.getElementById('notesDisplay');

// Function to render notes into the DOM
function displayNotes(notes) {
    notesDisplay.innerHTML = ''; // Clear previous notes
    notes.forEach(note => {
        // Create a paragraph for each note's content
        const noteElement = document.createElement('p');
        noteElement.textContent = note.content; // Set the note content in the paragraph
        notesDisplay.appendChild(noteElement); // Append the paragraph to the notes display section
    });
}

// Function to retrieve notes from localStorage
function loadNotes() {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || []; // Get notes from localStorage or an empty array
    displayNotes(storedNotes); // Display the notes in the UI
    updateRetrievalTime(); // Update the last retrieved timestamp
}

// Function to update the last retrieved time display
function updateRetrievalTime() {
    const currentTime = new Date().toLocaleTimeString(); // Get the current time
    document.getElementById('retrievalTime').textContent = `${userMessages.retrievalTime} ${currentTime}`; // Update the timestamp in the DOM
}

// Automatically retrieve and display notes every 2 seconds
setInterval(loadNotes, 2000);

// Initial load of notes
loadNotes();
