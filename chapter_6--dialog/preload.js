const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('api', {
    selectFilePreload: () => {
        return ipcRenderer.invoke('selectFileMain');
    },
    saveFilePreload: (value) => {
        ipcRenderer.send('saveFileMain', value);
    }
});

