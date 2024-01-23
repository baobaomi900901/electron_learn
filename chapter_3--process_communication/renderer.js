// console.log('renderer :>>', window);
// console.log('renderer :>>', window.hd);

// 4. 渲染进程与主进程通信
window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () => {
        window.mb.moby();
    })
})

