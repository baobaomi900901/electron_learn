// 模块管理, 先有 COMMONJS, 后有 ESM
const { BrowserWindow, app, screen } = require('electron'); // 窗口管理模块
const path = require('path');

const createWindow = () => {
    // 获取所有显示器信息
    const displays = screen.getAllDisplays();
    // 目标显示器
    const targetDisplay = displays.find((display) => {
        return display.id === 3
    })

    // 创建窗口
    const mainWindow = new BrowserWindow({
        width: 320,
        height: 320,
        alwaysOnTop: true, // 窗口置顶, 永远在最前面
        // x: 0, // 初始化时窗口的 x,y 坐标
        // y: 0,
        x: targetDisplay.bounds.x, // 初始化时窗口的 x,y 坐标
        y: targetDisplay.bounds.y,
        frame: false, // 无边框窗口
        transparent: true, // 透明窗口
    });
    // 加载网页
    // mainWindow.loadURL('https://www.baidu.com');
    // 加载一个本地文档
    mainWindow.loadFile(path.resolve(__dirname, 'index.html'));
    // 启动时, 启动开发者工具
    mainWindow.webContents.openDevTools();
    // 控制拖动比例
    // mainWindow.setAspectRatio(1);
    // 禁止拖动大小
    mainWindow.setResizable(false);
}

app.whenReady().then(() => {
    console.log('app is ready');
    createWindow();

    // 监听窗口关闭事件
    app.on('window-all-closed', () => {
        console.log('window-all-closed');
        // 非 mac 系统, 退出应用
        if (process.platform !== 'darwin') app.quit();
    });
    app.on('activate', () => {
        console.log('activate', BrowserWindow.getAllWindows().length);
        // mac 系统, 点击 dock 图标, 没有窗口时, 重新创建窗口
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
        createWindow();
    });
});

console.log('Hello from Electron 👋')