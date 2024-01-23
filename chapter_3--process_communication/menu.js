const { Menu } = require('electron')

const createMenu = (win) => {
    const template = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'Custom Quit',
                    click: () => {
                        console.log('Custom Quit Clicked!');
                        console.log('win.webContents :>>', win.webContents);
                        // win.webContents.send('test')
                    }
                }
            ]
        },
    ]


    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)  // 创建菜单, 并设置菜单
    // console.log('menu :>>', menu);
}

module.exports = { createMenu };