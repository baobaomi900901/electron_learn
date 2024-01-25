const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
    'api', {
    toMain: (msg) => {
        ipcRenderer.send('mainEvent', msg)
    },
});