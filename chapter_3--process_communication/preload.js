const { ipcRenderer, contextBridge } = require('electron')

// ipcRenderer.send('saveFile') // 向主进程发送事件

contextBridge.exposeInMainWorld('mb', {
    moby: () => {
        ipcRenderer.send("saveFile");
    },
})


ipcRenderer.on('add', () => {
    console.log('add 333');
    const el = document.querySelector('#counter')
    el.innerHTML = Number(el.innerHTML) + 1
})