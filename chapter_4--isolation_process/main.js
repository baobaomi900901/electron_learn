const { app, ipcMain, BrowserWindow, screen } = require('electron');
const { createWindow } = require('./window.js');

app.whenReady().then(() => {
    createWindow();
});

// ipcMain.on('mainEvent', (event, msg) => {
//     console.log('接收渲染进程的通知:>>', msg);
// })

// 传递数据给渲染进程
//
// 1. 通过webContents发送
ipcMain.handle('initMainWinDis', (event, msg) => {
    const init = BrowserWindow.fromWebContents(event.sender).getBounds();
    return init
})

ipcMain.handle('newH1', (event, arg) => {
    let newTitle = 10
    console.log('接收渲染进程的通知:>>', arg);
    return newTitle;
})


ipcMain.on('sendMainWinDis', (event, options) => {
    console.log('接收渲染进程的通知:>>', options);
    // 获取当前页面的窗口
    BrowserWindow.fromWebContents(event.sender).setBounds({ ...options }, true);
})

