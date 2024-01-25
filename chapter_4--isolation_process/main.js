const { app, ipcMain, BrowserWindow } = require('electron');
const { createWindow } = require('./window.js');

app.whenReady().then(() => {
    createWindow();
});

// ipcMain.on('mainEvent', (event, msg) => {
//     console.log('接收渲染进程的通知:>>', msg);
// })

