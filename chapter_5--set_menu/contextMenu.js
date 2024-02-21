const { ipcMain, Menu, BrowserWindow, shell } = require('electron');

ipcMain.on('mainPopMenu', (event) => {
    console.log('mainPopMenu');
    const template = [

        {
            label: '打开百度', click: async () => {
                await console.log('@点击菜单测试...');
                // 打开 baidu.com
                await shell.openExternal('https://www.baidu.com');

            }
        },
        {
            label: '像渲染进程发送事件',
            click: async () => {
                await event.sender.send('ping', 'Hello from Main')
            }
        },
        { type: 'separator' },
        {
            label: '退出',
        },
    ];
    const menu = Menu.buildFromTemplate(template);
    menu.popup(BrowserWindow.fromWebContents(event.sender));
});