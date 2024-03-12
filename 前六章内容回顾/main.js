const { app, ipcMain } = require('electron')
const { createWindow } = require('./window.js')
require('./menu')

app.whenReady().then(() => {
    createWindow()
    createMenu(win)
})

// 获取渲染进程中的信息
ipcMain.on('ReceiveEventFromMain', (event, msg) => {
    console.log('ReceiveEventFromMain :>>', msg);
})

// 传递信息给渲染进程
// console.log(process.versions);