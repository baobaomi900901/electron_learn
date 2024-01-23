const { ipcRenderer, contextBridge } = require('electron')

// ipcRenderer.send('saveFile') // 向主进程发送事件

contextBridge.exposeInMainWorld('mb', {
    moby: () => {
        ipcRenderer.send("saveFile");
    },
})

// 与 Nodejs 通信
// window.addEventListener('DOMContentLoaded', () => {
//     // console.log('process :>>', process); // process 对象, 与 Nodejs 一致
//     for (const versionType of ['chrome', 'electron', 'node']) { // 遍历版本号
//         document.getElementById(`${versionType}-version`).innerText = `${versionType}: v${process.versions[versionType]}`
//     }
// }) 

// ipcRenderer.on('test', () => {
//     console.log('333');
// })