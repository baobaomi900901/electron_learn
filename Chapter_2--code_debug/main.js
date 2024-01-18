// 模块管理, 先有 COMMONJS, 后有 ESM
const { BrowserWindow, app, screen } = require('electron'); // 窗口管理模块
const path = require('path');

const createWindow = () => {
    // 创建窗口到指定显示器
    const displays = screen.getAllDisplays();
    const targetDisplay = displays.find((display) => {
        return display.id === 2
    })

    const mainWindow = new BrowserWindow({
        width: 320,
        height: 320,
        alwaysOnTop: true,
        x: targetDisplay.bounds.x + 50,
        y: targetDisplay.bounds.y + 50,
        frame: false,
        transparent: true
    });
    mainWindow.loadFile(path.resolve(__dirname, 'index.html'));
    mainWindow.webContents.openDevTools();
    mainWindow.setResizable(false);
}

app.whenReady().then(() => {
    console.log('app is ready');
    createWindow();
});

console.log('Hello from Electron 👋')