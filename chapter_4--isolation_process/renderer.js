window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title');
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () => {
        window.api.toMain('hello from renderer');
    });

    const width = document.querySelector('#width');
    const height = document.querySelector('#height');
    const x = document.querySelector('#x');
    const sendWinDis = document.querySelector('#sendWinDis');

});