const { BrowserWindow, screen, shell } = require('electron')
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
        height: 500,
        // alwaysOnTop: true, // 窗口置顶
        x: targetDisplay.bounds.x + 50,
        y: targetDisplay.bounds.y,
        webPreferences: {
            preload: path.resolve(__dirname, "preload.js"), // use a preload script
        },
    });

    mainWindow.webContents.openDevTools(); // open dev tools by default
    mainWindow.loadFile(path.resolve(__dirname, 'index.html'));

    mainWindow.webContents.setWindowOpenHandler(({ url }) => { // 拦截新窗口打开, url为新窗口的url
        console.log(url);
        shell.openExternal(url); // 打开外部链接

        return { action: 'deny' }; // 阻止新窗口打开
    });

    return mainWindow;
};

module.exports = { createWindow };