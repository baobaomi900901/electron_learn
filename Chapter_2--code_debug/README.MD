# 笔记

## 安全引用

```html
<!-- // 设置 Content-Security-Policy, 只允许加载本地资源 -->
<!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self';script-src 'self'"
/>
```
