# 笔记 electron_learn

## 国内安装 bug

原因: 安装过程中会去 github 下载一个非常大的二进制预编译文件.

解决方法:

1. 设置镜像;

   ```
    npm config set registry https://registry.npm.taobao.org
   ```

2. 配置环境变量;

   ```
   open ~/.zshrc
   ```

   添加以下内容:

   ```
   export ELECTRON_MIRROR="http://npm.taobao.org/mirrors/electron/"
   export ELECTRON_CUSTOM_DIR="{{ version }}"
   ```

   生效环境变量:

   ```
   source ~/.zshrc
   ```

---

## 避免开发时重复启动

安装 nodemon, 默认不检测 html

```js
   "dev": "nodemon --exec electron ."
```

---
