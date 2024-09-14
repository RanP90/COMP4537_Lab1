/** 
DISCLOSURE: The initial structure of this code was generated with the help of ChatGPT. 
Subsequent modifications and improvements were made separately to meet specific project requirements.
*/

// Note class to represent individual notes
class Note {
    constructor(content) {
        this.content = content; // The content of the note
    }
}

// Get the DOM elements for notes and the add note button
const notesContainer = document.getElementById('notes-box');
const addNoteButton = document.getElementById('add-notes-button');

// Initialize notes array to hold all notes
let notes = [];

// When the page loads, retrieve saved notes from localStorage and display them
window.onload = function () {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || []; // Get notes from localStorage or an empty array
    notes = storedNotes.map(note => new Note(note.content)); // Recreate note objects from stored data
    renderNotes(); // Display notes in the UI
    updateSaveTime(); // Update the last save timestamp
};

// Function to render the notes into the DOM
function renderNotes() {
    notesContainer.innerHTML = ''; // Clear the notes container
    notes.forEach((note, index) => {
        // Create a div for each note
        const noteDiv = document.createElement('div');
        
        // Create a textarea for note content
        const noteTextArea = document.createElement('textarea');
        noteTextArea.value = note.content; // Set the current note content in the textarea
        noteTextArea.addEventListener('input', (e) => {
            // Update note content on user input
            notes[index].content = e.target.value;
            saveNotes(); // Save notes to localStorage whenever there's input
        });

        // Create a button to remove the note
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            removeNoteAt(index); // Remove note at this index
        });

        // Append textarea and remove button to the note div
        noteDiv.appendChild(noteTextArea);
        noteDiv.appendChild(removeButton);

        // Append note div to the notes container
        notesContainer.appendChild(noteDiv);
    });
}

// Event listener for adding a new note
addNoteButton.addEventListener('click', () => {
    notes.push(new Note('')); // Add a new empty note
    renderNotes(); // Update the UI with the new note
    saveNotes(); // Save notes to localStorage
});

// Function to remove a note at a given index
function removeNoteAt(index) {
    notes.splice(index, 1); // Remove the note from the array
    renderNotes(); // Re-render the notes without the deleted note
    saveNotes(); // Save updated notes to localStorage
}

// Function to save notes to localStorage
function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes)); // Save the notes array to localStorage as a JSON string
    updateSaveTime(); // Update the last saved timestamp
}

// Function to update the last saved time display
function updateSaveTime() {
    const currentTime = new Date().toLocaleTimeString(); // Get the current time
    document.getElementById('saveTime').textContent = `Last saved at: ${currentTime}`; // Update the timestamp in the DOM
}

// Automatically save notes to localStorage every 2 seconds
setInterval(saveNotes, 2000);