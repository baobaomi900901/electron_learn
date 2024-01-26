const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
    'api', {
    toMain: (msg) => {
        ipcRenderer.send('mainEvent', msg)
    },
    sendMainWinDis: (options) => {
        console.log('渲染 :>>', options);
        ipcRenderer.send('sendMainWinDis', options)
    },
    initMainWinDis: async (callback, msg) => {
        return callback(await ipcRenderer.invoke('initMainWinDis', msg))
    }
});