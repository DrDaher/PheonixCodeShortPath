// ShortenFilePath.js
const { commands } = require('phoenix');

function shortenFilePath(filePath) {
    // Your long base directory (adjust for your system)
    const baseDir = '/Users/dr.dahersayfeddine/Library/Application Support/';
    const relevantPart = filePath.replace(baseDir, '');  // Strip the long base path

    // Optionally, you can replace other parts of the path to make it even shorter
    const shortenedPath = relevantPart.replace('/CrossOver/Bottles/Generals/drive_c', '')
                                      .replace('/Users', '~'); // e.g. replace the user directory with ~

    return shortenedPath;
}

function updateStatusBar(filePath) {
    const shortened = shortenFilePath(filePath);

    // Update the file path in the status bar or wherever it's shown.
    // Assuming you are updating a UI element in Phoenix
    commands.executeCommand('workbench.action.setStatusBarMessage', `File: ${shortened}`);
}

// Listen for file path changes
commands.registerCommand('phoenix.shortenedFilePath', () => {
    const currentFilePath = commands.getActiveEditor().document.uri.path;
    updateStatusBar(currentFilePath);
});

// Optionally, set this up to auto-update whenever the file changes.