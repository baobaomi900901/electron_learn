const { app } = require('electron');
const { createWindow } = require('./window.js');

app.whenReady().then(() => {
    createWindow();
});