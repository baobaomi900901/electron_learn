## 通信篇

### 1. 渲染进程向主进程发送消息

```javascript
// main.js
// 步骤一: 主进程监测一个事件
const { app, ipcMain } = require("electron");

ipcMain.on("ReceiveEventFromMain", (event, msg) => {
  console.log(msg); // hello msg from renderer.js
});
```

```javascript
// perload.js
// 步骤二: 预加载进程在 window.api 中定义一个事件, 接收渲染进程的消息, 并发送给主进程
const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
  ReceiveEventPreload: (msg) => {
    ipcRenderer.send("ReceiveEventFromMain", msg);
  },
});
```

```javascript
// renderer.js
// 步骤三: 使用 window.api 中的方法, 传递消息给主进程
window.api.ReceiveEventPreload("hello msg from renderer.js");
```

### 2. 主进程像渲染进程发送消息

```javascript
// preload.js
// 仅使用 预加载进程 实现
// 原始做法
window.addEventListener("DOMContentLoaded", () => {
  console.log(process.versions); // 打印版本信息
  for (const app of ["chrome", "node", "electron"]) {
    const el = document.querySelector(`.${app}`);
    el.innerText = `${process.versions[app]}`;
  }
});
```
