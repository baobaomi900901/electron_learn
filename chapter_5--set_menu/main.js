const { app, BrowserWindow } = require('electron');
const { createWindow } = require('./window.js');
require('./menu');

app.whenReady().then(() => {
    createWindow();
});

// 当所有窗口关闭时, 非 MacOS 退出应用
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

// 当应用激活时, 如果没有窗口且是 MacOS, 则创建一个窗口
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0 && process.platform !== 'darwin') {
        createWindow();
    }
})