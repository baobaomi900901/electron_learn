window.addEventListener('DOMContentLoaded', () => {

    const r2mBtn = document.querySelector('#r2mBtn')

    r2mBtn.addEventListener('click', () => {
        console.log('r2mBtn :>>', r2mBtn);
        window.api.ReceiveEventPreload('Hello msg from renderer.js')
    })

    const m2rBtn = document.querySelector('#m2rBtn')
    m2rBtn.addEventListener('click', async () => {
        // console.log('first')
        // window.api.MainToRenderFromPreload((value) => {
        //     console.log('main.js 传递信息给 renderer.js', value);
        // })
    })
})