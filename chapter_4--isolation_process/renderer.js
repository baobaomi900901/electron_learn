window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title');
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () => {
        window.api.toMain('hello from renderer');
    });
    console.log('window.hd :>> ', window.hd);
});