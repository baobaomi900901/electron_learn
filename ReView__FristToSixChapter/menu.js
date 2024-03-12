/*
    新知识点
    // 分割线 : { type: 'separator' },
    // 增加热键 : accelerator: 'CmdOrCtrl+shift+n',
 */
const { app, Menu, shell, BrowserWindow } = require('electron');
const isMac = process.platform === 'darwin';

const createMenu = (win) => {
    // console.log('menu :>>', win);
    const template = [
        ...(isMac
            ? [
                {
                    label: app.name,
                    submenu: [
                        { label: '访问网站', click: async () => { await shell.openExternal('https://www.electronjs.org') } },
                        { role: 'about' },
                    ]
                }
            ] : []),
        {
            label: '默认',
            submenu: [
                { role: 'reload' },
                { role: 'forceReload' },
                { role: 'toggleDevTools' },
                { type: 'separator' },
                { role: 'resetZoom' },
                { role: 'zoomIn' },
                { role: 'zoomOut' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
            ]
        }, {
            label: '操作',
            submenu: [
                {
                    label: '打开窗口',
                    // 增加热键
                    accelerator: 'CmdOrCtrl+shift+n',
                    click: async () => {
                        await new BrowserWindow({
                            width: 800,
                            height: 500,
                        })
                    }
                },
                {
                    label: '测试', click: async () => {
                        await console.log('@点击菜单测试...');
                    }
                },
                {
                    label: '像渲染进程发送事件',
                    click: async () => {
                        await win.webContents.send('ping', 'Hello from Main')
                    }
                },
                // 分割线
                { type: 'separator' },
                {
                    ...(isMac
                        ? { label: '隐藏', role: 'hide', accelerator: 'CmdOrCtrl+Q' }
                        : { label: '退出', role: 'quit' })
                },
            ]
        }
    ];

    // Menu.setApplicationMenu(Menu.buildFromTemplate(config)); // 设置菜单栏
    // Menu.setApplicationMenu(null); // 移除菜单栏

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}

module.exports = { createMenu };