window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#btn');
    const counter = document.querySelector('#counter');

    let arg = 0;

    window.api.on('add2', (data) => { // 3.监听预加载进程的事件, 接收数据
        console.log('主进程传递的参数 :>>', data); // prints "2"
        arg = data;
    });

    btn.addEventListener('click', () => {
        counter.innerHTML = Number(counter.innerHTML) + arg;
        window.api.send('receive', counter.innerHTML); // 6.向主进程发送数据
    })


    // 上传文件
    const btn2 = document.querySelector('#btn2');
    const input = document.querySelector('#input');

    btn2.addEventListener('click', async () => {
        input.value = await window.api.upload('已经获取 filePath : ');
    })
})