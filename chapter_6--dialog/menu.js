/*
    新知识点
    // 分割线 : { type: 'separator' },
 */
const { app, Menu, shell, BrowserWindow, dialog } = require('electron');
const isMac = process.platform === 'darwin';
const template = [{
    label: '操作',
    submenu: [
        // 分割线
        { type: 'separator' },
        {
            label: '弹出对话框', click: async () => {
                const win = BrowserWindow.getFocusedWindow();
                await win.webContents.executeJavaScript('alert("这是一个弹出对话框")');
            }
        },
        // 分割线
        { type: 'separator' },
        {
            label: '访问网站', click: async () => {
                const res = await dialog.showMessageBox({
                    title: '访问网站',
                    message: '是否访问网站？默认百度',
                    buttons: ['是', '否', '打开JD'],
                    defaultId: 0, // 默认选中的按钮 buttons.index
                    // cancelId: 1, // 按下 ESC 按钮的返回值
                    checkboxLabel: '打开JD', // 复选框的标签
                    type: 'question' // 信息类型
                });
                console.log(res);
                if (res.response === 0 && res.checkboxChecked === true) {
                    shell.openExternal('https://www.jd.com');
                } else if (res.response === 0) {
                    shell.openExternal('https://www.baidu.com');
                }
            }
        },
        {
            label: '警告框', click: async () => {
                // const res = await dialog.showMessageBox({
                //     title: '警告框',
                //     message: '这是一个警告框',
                //     buttons: ['是'],
                //     defaultId: 0, // 默认选中的按钮
                //     // cancelId: 1, // 按下 ESC 按钮的返回值
                //     type: 'warning'
                // });
                const res = await dialog.showMessageBox('温馨提示', '是');
                console.log(res);
            }
        },
        // 分割线
        { type: 'separator' },
        {
            label: '退出', click: async () => {
                const res = await dialog.showMessageBox({
                    title: '退出',
                    message: '是否退出？',
                    buttons: ['是', '否'],
                    defaultId: 0, // 默认选中的按钮
                    // cancelId: 1, // 按下 ESC 按钮的返回值   
                    type: 'question'
                });
                console.log(res);
                if (res.response === 0) {
                    app.quit();
                }
            }
        }
    ]
}];

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)