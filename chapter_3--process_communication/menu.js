const { Menu } = require('electron')

const CreateMenu = (win) => {
    const template = [
        {
            label: '文件',
            submenu: [
                {
                    label: '增加',
                    click: () => {
                        win.webContents.send('add', 2)
                    }
                }
            ]
        }
    ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}

module.exports = { CreateMenu }