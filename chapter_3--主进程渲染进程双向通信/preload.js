const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
    'api', {
    changeH1: async (callback, msg) => {
        return callback(await ipcRenderer.invoke('newH1', msg));
    },
    sendWinTitle: (newWinTitle) => {
        console.log('预加载进程, 获取渲染进程参数 :>>', newWinTitle);
        ipcRenderer.invoke('changeWindowbTitle', newWinTitle);
    },
    add: async (callback, res) => {
        console.log('预加载进程', res);
        return callback(await ipcRenderer.invoke('add', res));
    },
}); 