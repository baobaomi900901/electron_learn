// 模块管理, 先有 COMMONJS, 后有 ESM
const { BrowserWindow, app, screen } = require('electron'); // 窗口管理模块
const path = require('path');

const createWindow = () => {
    const displays = screen.getAllDisplays();
    const targetDisplay = displays.find((display) => {
        return display.id === 3
    })

    // 创建窗口
    const mainWindow = new BrowserWindow({
        width: 3200,
        height: 3200,
        alwaysOnTop: true, // 窗口置顶, 永远在最前面
        x: targetDisplay.bounds.x, // 初始化时窗口的 x,y 坐标
        y: targetDisplay.bounds.y,
    });
    // 加载网页
    mainWindow.loadURL('http://localhost:5173/');
    // 启动时, 启动开发者工具
    mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
    console.log('app is ready');
    createWindow();
});

console.log('Hello from Electron 👋')