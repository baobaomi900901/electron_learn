window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title');
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () => {
        window.api.changeH1(
            (result) => {
                title.innerHTML = result;
            },
            `渲染进程:已经修改`
        );
    });

    const newWinTitle = document.querySelector('#new-win-title');
    const btn2 = document.querySelector('#btn2');
    btn2.addEventListener('click', () => {
        if (newWinTitle.value !== '') {
            window.api.sendWinTitle(newWinTitle.value);
            return;
        }
        console.log('@: 输入框没有值');
        return;

    });

});