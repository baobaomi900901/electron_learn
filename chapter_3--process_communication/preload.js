const { ipcRenderer, contextBridge } = require('electron')

// ipcRenderer.send('saveFile') // 向主进程发送事件

contextBridge.exposeInMainWorld('mb', {
    moby: () => {
        ipcRenderer.send("saveFile");
    },
})


// ipcRenderer.on('test', () => {
//     console.log('333');
// })