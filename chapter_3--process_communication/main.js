const { BrowserWindow, app, screen, ipcMain, Menu, dialog } = require('electron');
const path = require('path');

const createWindow = () => {
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
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    mainWindow.webContents.openDevTools();
    mainWindow.loadFile(path.resolve(__dirname, 'index.html'));

    // 1.传递数据给预加载进程
    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.webContents.send('add2', 2);
    });

}

app.whenReady().then(() => {
    createWindow();
});

// 4.监听渲染进程的事件, 并传递给主进程
ipcMain.on('receive', (event, arg) => {
    console.log(arg);
});
