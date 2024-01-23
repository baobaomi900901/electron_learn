const { Menu } = require('electron')

const CreateMenu = () => {
    const template = [
        {
            label: '文件',
            submenu: [
                {
                    label: '增加',
                    click: () => {
                        console.log('增加333');
                    }
                }
            ]
        }
    ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}

module.exports = { CreateMenu }