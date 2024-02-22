const { app, BrowserWindow } = require('electron');
const { createWindow } = require('./window.js');

app.whenReady().then(() => {
    const win = createWindow();
});