// console.log('renderer :>>', window);
// console.log('renderer :>>', window.hd);

// 渲染进程 与 主进程通信
window.api.AddCounter((value) => {
    console.log('value :>>', value);
    const el = document.querySelector('#counter')
    el.innerHTML = Number(el.innerHTML) + value
})
