# 进程通信

## 1. 主进程与预加载进程

- 预加载进程 to 主进程

  ```js
  // main.js
  ipcMain.on("saveFile", () => {
    console.log("@主进程接收到事件 :>> saveFile");
  });

  // preload.js
  ipcRenderer.send("saveFile");
  ```

- 渲染进程 to 预加载进程 to 主进程

  ```js
  // preload.js
  contextBridge.exposeInMainWorld("mb", {
    saveFile: () => {
      ipcRenderer.send("saveFile");
    },
  });

  // renderer.js
  window.mb.moby();
  ```
