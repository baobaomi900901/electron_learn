const { ipcRenderer, contextBridge } = require('electron')


contextBridge.exposeInMainWorld('api', {
    AddCounter: (callback) => {
        ipcRenderer.on('add', (event, value) => {
            callback(value)
        })
    },
})
