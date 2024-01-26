const { app, ipcMain, BrowserWindow, screen } = require('electron');
const { createWindow } = require('./window.js');

app.whenReady().then(() => {
    createWindow();
});