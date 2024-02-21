const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
    'api', {
    menuEvent: async (callback) => {
        ipcRenderer.on('ping', (event, message) => {
            callback(message)
        })
    }
});


window.addEventListener('contextmenu', (e) => {
    console.log('right click');
    ipcRenderer.send('mainPopMenu');
});