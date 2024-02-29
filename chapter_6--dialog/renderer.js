window.addEventListener('DOMContentLoaded', () => {
    const btnSelectFile = document.querySelector('#selectBtn');
    btnSelectFile.addEventListener('click', async () => {
        const res = await window.api.selectFilePreload();
        console.log(...res);

        const container = document.querySelector('.container');
        container.innerHTML = res.map(path => {
            return `<img src="${path}" alt="image"  style='width:200px'/>`;
        }).join('');
    });

    const btnSave = document.querySelector('#saveBtn');
    const textArea = document.querySelector('textArea');
    btnSave.addEventListener('click', async () => {
        const res = await window.api.saveFilePreload(textArea.value);
    });
});