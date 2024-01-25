// window.addEventListener('DOMContentLoaded', () => {
//     const title = document.querySelector('#title');
//     const btn = document.querySelector('#btn');
//     btn.addEventListener('click', () => {
//         window.api.toMain('hello from renderer');
//     });
// });

const fs = require('fs');

fs.writeFileSync('message.txt', 'Hello Node.js haha', 'utf8');
