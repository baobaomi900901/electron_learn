const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
    'api', {
    on: (channel, func) => { // 2.监听来自主进程的事件, 并传递给渲染进程
        ipcRenderer.on(channel, (event, ...args) => {
            return func(...args)
        });
    },
    send: (channel, data) => { // 5.监听来自渲染进程的事件, 并传递给主进程
        ipcRenderer.send(channel, data);
    }
});