const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
    'api', {
    on: (channel, func) => {
        ipcRenderer.on(channel, (event, ...args) => {
            return func(...args)
        });
    }
});