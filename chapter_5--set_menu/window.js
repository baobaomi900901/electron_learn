const { BrowserWindow, screen } = require('electron')
const path = require('path')

const createWindow = () => {
    const displays = screen.getAllDisplays();
    const targetDisplay = displays.find((display) => {
        const equipments = ['BenQ EW2780U', 'LG HDR 4K']
        return equipments.includes(display.label) // 通过显示器名称来定位
    })

    // console.log(displays); // 打印所有显示器信息

    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        // alwaysOnTop: true,
        x: targetDisplay.bounds.x + 25,
        y: targetDisplay.bounds.y + 25,
        webPreferences: {
            preload: path.resolve(__dirname, "preload.js"), // use a preload script
        },
    });


    mainWindow.webContents.openDevTools(); // open dev tools by default
    mainWindow.loadFile(path.resolve(__dirname, 'index.html'));
};

module.exports = { createWindow };