const { app, ipcMain, BrowserWindow } = require('electron');
const { createWindow } = require('./window.js');

app.whenReady().then(() => {
    createWindow();
});

// 1.主进程数据 通过预加载进程 传递给渲染进程, 修改后发送通知给主进程, 在终端打印
ipcMain.handle('newH1', (event, arg) => {
    let newTitle = 'baobaomi'
    console.log('接收渲染进程的通知:>>', arg);
    return newTitle;
})

// 2.渲染进程数据 通过预加载进程 传递给主进程, 修改后在终端打印通知
ipcMain.handle('changeWindowbTitle', (event, newTitle) => {
    BrowserWindow.fromWebContents(event.sender).title = newTitle // 修改窗口标题
    console.log('已接收到渲染进程传递的参数, 并修改成功 :>>', newTitle);
})