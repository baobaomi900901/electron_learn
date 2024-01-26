window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title');
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () => {
        window.api.toMain('hello from renderer');
    });
    const sendWinDis = document.querySelector('#sendWinDis');

    // 初始化窗口参数
    window.api.initMainWinDis((arg) => {
        console.log('渲染 :>>', width, height, x, y);
        width.value = arg.width;
        height.value = arg.height;
        x.value = arg.x;
        y.value = arg.y;
    });


    sendWinDis.addEventListener('click', () => {
        const width = document.querySelector('#width').value * 1;
        const height = document.querySelector('#height').value * 1;
        const x = document.querySelector('#x').value * 1;
        const y = document.querySelector('#y').value * 1;

        console.log(width, height, x, y);
        window.api.sendMainWinDis({ width, height, x, y });
    })
});