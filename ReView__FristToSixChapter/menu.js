/*
    新知识点
    // 分割线 : { type: 'separator' },
    // 增加热键 : accelerator: 'CmdOrCtrl+shift+n',
 */
const { Menu, app, shell } = require('electron');
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
                        {
                            label: '计数器+1', click: () => {
                                win.webContents.send('test', 1)
                            }
                        },
                    ]
                }
            ] : []),
    ];

    // Menu.setApplicationMenu(Menu.buildFromTemplate(config)); // 设置菜单栏
    // Menu.setApplicationMenu(null); // 移除菜单栏

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}

module.exports = { createMenu };