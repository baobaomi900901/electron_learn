// const { contextBridge, ipcRenderer } = require('electron');

// contextBridge.exposeInMainWorld(
//     'api', {
//     toMain: (msg) => {
//         ipcRenderer.send('mainEvent', msg)
//     },
// });


const fs = require('fs');
fs.writeFileSync('message.txt', 'Hello Node.js', 'utf8');