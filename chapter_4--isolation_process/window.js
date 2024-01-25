const { BrowserWindow, screen } = require("electron");
const path = require("path");
const createWindow = () => {
    const displays = screen.getAllDisplays();
    const targetDisplay = displays.find((display) => {
        return display.id === 2
    })

    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        // alwaysOnTop: true,
        x: targetDisplay.bounds.x + 25,
        y: targetDisplay.bounds.y + 25,
        webPreferences: {
            preload: path.resolve(__dirname, "preload.js"), // use a preload script
            contextIsolation: false, // 上下文隔离, 关闭后可以使用nodejs的api 
            nodeIntegration: true, // 是否集成nodejs, 不推荐
        }
    });

    mainWindow.webContents.openDevTools(); // open dev tools by default
    mainWindow.loadFile(path.resolve(__dirname, 'index.html'));
};

module.exports = { createWindow };