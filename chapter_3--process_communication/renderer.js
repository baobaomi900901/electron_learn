let arg = 0;

window.api.on('add2', (data) => { // 监听来自主进程的事件
    console.log(data); // prints "2"
    arg = data;
});


window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#btn');
    const counter = document.querySelector('#counter');

    btn.addEventListener('click', () => {
        counter.innerHTML = Number(counter.innerHTML) + arg;
    })
})