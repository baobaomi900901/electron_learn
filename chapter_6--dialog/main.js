const { app, BrowserWindow } = require('electron');
const { createWindow } = require('./window.js');
require('./menu');

app.whenReady().then(() => {
    createWindow();
    createMenu();
});
