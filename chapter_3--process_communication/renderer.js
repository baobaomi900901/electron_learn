// console.log('renderer :>>', window);
// console.log('renderer :>>', window.hd);


const el = document.querySelector('#counter')

// 渲染进程 与 主进程通信
window.api.AddCounter((value) => {
    console.log('value :>>', value);
    el.innerHTML = Number(el.innerHTML) + value
})


// 等待页面加载完成
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');
    const btn = document.querySelector('#btn')
    btn.addEventListener('click', () => {
        window.api.MainSend(el.innerHTML) // 向主进程发送通知, 将 '渲染' 传递给预加载进程, 然后预加载进程再传递给主进程
    })

    const btn2 = document.querySelector('#btn2')
    btn2.addEventListener('click', () => {
        window.api.UIpload()
    })
})