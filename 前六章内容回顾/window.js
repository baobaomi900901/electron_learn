const { BrowserWindow, screen, shell } = require('electron');
const path = require('path');

const createWindow = () => {

    const displays = screen.getAllDisplays();
    const targetDisplay = displays.find((display) => {
        const equipments = ['BenQ EW2780U', 'LG HDR 4K']
        return equipments.includes(display.label) // 通过显示器名称来定位
    });

    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        x: targetDisplay.bounds.x + 50,
        y: targetDisplay.bounds.y,
        webPreferences: {
            preload: path.resolve(__dirname, "preload.js"), // use a preload script
        },
    });
    mainWindow.loadFile(path.resolve(__dirname, 'index.html'));
    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    return mainWindow;
};


module.exports = { createWindow };