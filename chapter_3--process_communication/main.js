const { BrowserWindow, app, screen, ipcMain, Menu, dialog } = require('electron');
const { CreateMenu } = require('./menu.js')
const path = require('path');

const createWindow = () => {
    // 创建窗口到指定显示器
    const displays = screen.getAllDisplays();
    const targetDisplay = displays.find((display) => {
        return display.id === 2
    })

    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        alwaysOnTop: true,
        x: targetDisplay.bounds.x + 25,
        y: targetDisplay.bounds.y + 25,
        // frame: false,
        // 预加载脚本
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // 但预加载的 js 文件内仍可以使用 Nodejs 的 API
            // nodeIntegration: true, // 允许使用 Nodejs 的 API
            // contextIsolation: false, // 不允许 Electron 与页面的 JS 直接通信
        }
    });
    mainWindow.webContents.openDevTools();
    mainWindow.loadFile(path.resolve(__dirname, 'index.html'));
    CreateMenu(mainWindow)
}

app.whenReady().then(() => {
    createWindow();
});

// 监听 渲染进程的事件 [saveFile]
ipcMain.on("MainSend", (event, rec) => {
    console.log("@主进程接收到事件 :>> MainSend", rec);
    BrowserWindow.fromWebContents(event.sender).webContents.send('msg', 1)
})

ipcMain.handle("selectFile", async (event, rec) => {
    const { filePaths } = await dialog.showOpenDialog({})
    console.log(filePaths[0]);
    return filePaths[0]
})