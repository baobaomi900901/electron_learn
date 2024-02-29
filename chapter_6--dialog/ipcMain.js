const { ipcMain, dialog } = require('electron');
const fs = require('fs');

ipcMain.handle('selectFileMain', async (event, arg) => {
    const res = await dialog.showOpenDialog({
        title: 'Select a file',
        properties: ['openFile', 'multiSelections'],
        filters: [
            { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
        ]
    })
    console.log(res);
    return res.filePaths;
});

ipcMain.on('saveFileMain', async (event, arg) => {
    console.log(arg);

    const { filePath } = await dialog.showSaveDialog({
        title: 'Save a file',
        filters: [
            { name: 'Text', extensions: ['txt'] },
        ]
    });

    console.log(filePath);
    fs.writeFileSync(filePath, arg);
});