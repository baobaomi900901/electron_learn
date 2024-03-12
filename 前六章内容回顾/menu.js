const { Menu } = require('electron')

const createMenu = (win) => {
    const menu = [
        {
            label: 'File',
            click: () => {
                console.log('File')
            }
        }
    ]

    Menu.setApplicationMenu(Menu.buildFromTemplate(menu))
}

module.exports = { createMenu }