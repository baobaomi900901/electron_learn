const { BrowserWindow, screen } = require("electron");
const path = require("path");
const createWindow = () => {
    const displays = screen.getAllDisplays();
    const targetDisplay = displays.find((display) => {
        const equipments = ['BenQ EW2780U', 'LG HDR 4K']
        return equipments.includes(display.label) // 通过显示器名称来定位
    })

    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        // alwaysOnTop: true,
        x: targetDisplay.bounds.x + 25,
        y: targetDisplay.bounds.y + 25,
        webPreferences: {
            preload: path.resolve(__dirname, "preload.js"), // use a preload script
        },
        // fullscreen: true, // 全屏
        // center: true, // 居中
        // frame: false, // 无边框
        // transparent: true, // 透明
        // titleBarStyle: 'customButtonsOnHover', // 隐藏标题栏
    });

    mainWindow.webContents.openDevTools(); // open dev tools by default
    mainWindow.loadFile(path.resolve(__dirname, 'index.html'));

    // setTimeout(() => {
    //     // 设置窗口大小和位置, 以及是否有动画
    //     mainWindow.setBounds(
    //         {
    //             width: 300,
    //             height: 300,
    //             x: targetDisplay.bounds.x + 300,
    //             y: targetDisplay.bounds.y + 300
    //         },
    //         true
    //     )
    // }, 1000);
};

module.exports = { createWindow };