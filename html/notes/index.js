const fontSelector = document.getElementById('fontSelector');
const editorTextarea = document.getElementById('editor');
const selectedFont = fontSelector.value;
const fontSizeValue = document.getElementById('fontSize').value;

// Add an event listener to the font selector
fontSelector.addEventListener('change', function() {
    // Get the selected font from the value of the selected option
    const selectedFont = fontSelector.value;
    

    // Apply the selected font to the editor textarea
    editorTextarea.style.fontFamily = selectedFont;
});

function setFontSize() {
    const fontSizeValue = document.getElementById('fontSize').value;

    editorTextarea.style.fontSize = `${fontSizeValue}vw`;
}

const saveButton = document.getElementById('saveButton');
const savedContent = document.getElementById('savedContent');

// Add an event listener to the "Save" button
saveButton.addEventListener('click', function() {
    // Get the content from the textarea
    const content = editorTextarea.value;

    // Save the content to a cookie with a specific name and expiration date
    document.cookie = `editorContent=${encodeURIComponent(content)}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
    document.cookie = `fontFamily=${selectedFont}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
    document.cookie = `fontSize=${fontSizeValue}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;

    // Display a confirmation message
    alert('Content saved to cookie!');
});

// Function to retrieve a cookie's value by name
function getCookie(cookieName) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === cookieName) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

window.addEventListener('load', function() {
    const fontFamilyContent = getCookie('fontFamily');
    const fontSizeContent = getCookie('fontFamily');


    editorTextarea.style.fontFamily = `${fontFamilyContent}`
    editorTextarea.style.fontSize = `${fontSizeContent}`
});

const editorContent = getCookie('editorContent');
editorTextarea.value = editorContent;
