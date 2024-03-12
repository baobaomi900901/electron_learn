const { app, ipcRenderer, contextBridge } = require("electron");

// ipcRenderer.send("ReceiveEventMain", "Hello from preload.js");

contextBridge.exposeInMainWorld("api", {
    ReceiveEventPreload: (msg) => {
        console.log('ReceiveEventPreload :>>', msg);
        ipcRenderer.send('ReceiveEventFromMain', msg)
    },
    SendMSGFromPreload: async (msg) => {
        const result = await ipcRenderer.invoke('SendMSGFromMain', msg)
        console.log('SendMSGFromPreload :>>', msg);
        // console.log('SendMSGFromPreload result :>>', result);
        return result
    }
})

ipcRenderer.on('SendMSGFromMain', (event, msg) => {
    console.log('SendMSGFromMain :>>', msg);
})


// // 原始做法
// window.addEventListener('DOMContentLoaded', () => {
//     console.log(process.versions); // 打印版本信息
//     for (const app of ['chrome', 'node', 'electron']) {
//         const el = document.querySelector(`.${app}`)
//         el.innerText = `${process.versions[app]}`
//     }
// })