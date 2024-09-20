/** 
DISCLOSURE: The initial structure of this code was generated with the help of ChatGPT. 
Subsequent modifications and improvements were made separately to meet specific project requirements.
*/

// Class representing individual notes
class Note {
    constructor(content, id) {
        this.content = content;  
        this.id = id;            
    }

    // Method to update the content of the note
    updateContent(newContent) {
        this.content = newContent;
    }

    // Method to retrieve the content of the note
    getContent() {
        return this.content;
    }

    // Method to return a string representation of the note
    toString() {
        return `Note ${this.id}: ${this.content}`;
    }
}

// Class responsible for managing notes (add, remove, load from storage)
class NoteManager {
    constructor() {
        this.notes = this.loadNotesFromStorage() || []; // Load notes from localStorage or initialize an empty array
    }

    // Add a new note
    addNote(content = '') {
        const newNote = new Note(content);
        this.notes.push(newNote);
        this.saveNotesToStorage();
    }

    // Remove a note by index
    removeNoteAt(index) {
        this.notes.splice(index, 1); // Remove note at the index
        this.saveNotesToStorage();
    }

    // Save notes to localStorage
    saveNotesToStorage() {
        localStorage.setItem('notes', JSON.stringify(this.notes)); // Store the notes array as a JSON string
    }

    // Load notes from localStorage
    loadNotesFromStorage() {
        return JSON.parse(localStorage.getItem('notes'))?.map(noteData => new Note(noteData.content)) || [];
    }
}

// Class responsible for rendering and managing the UI interactions
class UIManager {
    constructor(noteManager) {
        this.noteManager = noteManager; // Reference to the NoteManager
        this.notesContainer = document.getElementById('notes-box');
        this.addNoteButton = document.getElementById('add-notes-button');
        this.init(); 
    }

    // Initialize event listeners and render initial notes
    init() {
        this.addNoteButton.addEventListener('click', () => this.handleAddNoteClick());
        this.renderNotes(); // Initial render of notes
        this.updateSaveTime();
    }

    // Render the notes into the DOM
    renderNotes() {
        this.notesContainer.innerHTML = ''; // Clear the notes container

        this.noteManager.notes.forEach((note, index) => {
            const noteDiv = document.createElement('div');

            // Create a textarea for note content
            const noteTextArea = document.createElement('textarea');
            noteTextArea.value = note.content; // Set the current note content
            noteTextArea.addEventListener('input', (e) => {
                this.noteManager.notes[index].content = e.target.value;
                this.noteManager.saveNotesToStorage(); // Save notes whenever there’s an input change
                this.updateSaveTime(); // Update save time after input
            });

            // Create a button to remove the note
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                this.noteManager.removeNoteAt(index); // Remove note at index
                this.renderNotes(); // Re-render notes
            });

            // Append textarea and remove button to the note div
            noteDiv.appendChild(noteTextArea);
            noteDiv.appendChild(removeButton);
            this.notesContainer.appendChild(noteDiv); // Append the note div to the notes container
        });
    }

    // Add a new note
    handleAddNoteClick() {
        this.noteManager.addNote(); // Add an empty note
        this.renderNotes(); // Re-render the notes in the UI
    }

    // Update the last saved time display
    updateSaveTime() {
        const currentTime = new Date().toLocaleTimeString(); // Get the current time
        document.getElementById('saveTime').textContent = `Last saved at: ${currentTime}`; // Update the DOM with the last saved time
    }
}

// Initialize NoteManager and UIManager when the page loads
window.onload = () => {
    const noteManager = new NoteManager(); // Create a new NoteManager
    new UIManager(noteManager); // Pass the NoteManager to the UIManager
    setInterval(() => noteManager.saveNotesToStorage(), 2000); // Auto-save notes every 2 seconds
};
