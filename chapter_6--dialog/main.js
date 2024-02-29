const { app, BrowserWindow } = require('electron');
const { createWindow } = require('./window.js');
require('./menu');
require('./ipcMain');

app.whenReady().then(() => {
    createWindow();
    createMenu();
});
