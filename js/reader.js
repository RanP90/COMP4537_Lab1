/** 
DISCLOSURE: The initial structure of this code was generated with the help of ChatGPT. 
Subsequent modifications and improvements were made separately to meet specific project requirements.
*/

// Class responsible for displaying notes in the reader view
class ReaderUIManager {
    constructor(noteManager) {
        this.noteManager = noteManager;
        this.notesDisplay = document.getElementById('notesDisplay');
        this.init();
    }

    // Initialize by loading notes and setting up auto-refresh
    init() {
        this.loadNotes();
        setInterval(() => this.loadNotes(), 2000); // Auto-refresh notes every 2 seconds
    }

    // Display notes on the page
    loadNotes() {
        this.notesDisplay.innerHTML = ''; // Clear the display area
        this.noteManager.notes.forEach(note => {
            const noteElement = document.createElement('p');
            noteElement.textContent = note.content; // Set note content
            this.notesDisplay.appendChild(noteElement); // Append to the DOM
        });
        this.updateRetrievalTime(); // Update the last retrieval time
    }

    // Update the last retrieval time display
    updateRetrievalTime() {
        const currentTime = new Date().toLocaleTimeString(); // Get the current time
        document.getElementById('retrievalTime').textContent = `Last retrieved at: ${currentTime}`; // Update the DOM with the last retrieval time
    }
}

// Initialize the ReaderUIManager when the reader page loads
window.onload = () => {
    const noteManager = new NoteManager(); // Create a shared NoteManager instance
    new ReaderUIManager(noteManager); // Initialize ReaderUIManager with the same NoteManager
};
