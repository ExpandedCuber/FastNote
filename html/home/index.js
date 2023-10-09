editor.addEventListener('input', updatePreview);

        // Function to update the preview pane
        function updatePreview() {
        // Get the content from the text editor
        const content = editor.value;

        // Set the content in the preview pane
        preview.innerHTML = content;
        }