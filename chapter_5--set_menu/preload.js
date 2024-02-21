const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
    'api', {
    menuEvent: async (callback) => {
        ipcRenderer.on('ping', (event, message) => {
            callback(message)
        })
    }
});

// 定义一个ping的事件
ipcRenderer.on('ping', (event, message) => {
})