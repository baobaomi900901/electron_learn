const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld('api', { // 与渲染进程通信, 通过 window.api.xxx 调用
    AddCounter: (callback) => {
        ipcRenderer.on('add', (event, value) => {
            callback(value)
        })
    },
    MainSend: (v) => { // 向主进程发送通知
        ipcRenderer.send('MainSend', v)
    }
})

ipcRenderer.on('msg', (event, message) => { // 监听主进程的通知
    console.log('渲染进程 msg :>>', message);
})