const { app, ipcRenderer, contextBridge } = require("electron");

// ipcRenderer.send("ReceiveEventMain", "Hello from preload.js");

contextBridge.exposeInMainWorld("api", {
    ReceiveEventPreload: (msg) => {
        console.log('ReceiveEventPreload :>>', msg);
        ipcRenderer.send('ReceiveEventFromMain', msg)
    },
    MainToRenderFromPreload: (callback) => {
        ipcRenderer.on('MainToRender', (event, value) => {
            callback(value)
        })
    }
})



// // 原始做法
// window.addEventListener('DOMContentLoaded', () => {
//     console.log(process.versions); // 打印版本信息
//     for (const app of ['chrome', 'node', 'electron']) {
//         const el = document.querySelector(`.${app}`)
//         el.innerText = `${process.versions[app]}`
//     }
// })