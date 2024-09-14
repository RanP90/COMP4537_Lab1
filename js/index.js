/** 
DISCLOSURE: The initial structure of this code was generated with the help of ChatGPT. 
Subsequent modifications and improvements were made separately to meet specific project requirements.
*/

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set the page title
    document.title = userMessages.headerTitle;

    // Create header with the page title
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.textContent = userMessages.headerTitle; // Set the title text
    header.appendChild(title);

    // Create navigation
    const nav = document.createElement('nav');
    const navList = document.createElement('ul');
    navList.style.listStyleType = 'none'; // Remove list bullets

    // Create "Go to Writer" button
    const writerItem = document.createElement('li');
    const writerButton = document.createElement('button');
    writerButton.textContent = userMessages.writerButtonLabel; // Set button label
    writerButton.addEventListener('click', () => {
        window.location.href = 'writer.html'; // Redirect to writer.html when clicked
    });
    writerItem.appendChild(writerButton);
    navList.appendChild(writerItem);

    // Create "Go to Reader" button
    const readerItem = document.createElement('li');
    const readerButton = document.createElement('button');
    readerButton.textContent = userMessages.readerButtonLabel; // Set button label
    readerButton.addEventListener('click', () => {
        window.location.href = 'reader.html'; // Redirect to reader.html when clicked
    });
    readerItem.appendChild(readerButton);
    navList.appendChild(readerItem);

    // Append navigation to the document body
    nav.appendChild(navList);
    document.body.appendChild(header);
    document.body.appendChild(nav);
});