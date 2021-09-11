const template = `
    <section class="container">
        <h1><a href=# class="js-link" data-project="/">&lt;</a> Colors</h1>
        <p>Pretty simple project where clicking on <button id="change-background">this button</button> would randomly change the background color of the whole page</p>
        <p>Background color is <code>RGB(<span class="red-text">255</span>, <span class="green-text">255</span>, <span class="blue-text">255</span>)</code></p>        
    </section>
`

const render = (contentBlock: HTMLElement) => {
    contentBlock.innerHTML = template

    document.querySelector<HTMLButtonElement>('#change-background')?.addEventListener('click', () => {
        const red: string = String(Math.floor(Math.random() * 255))
        const green: string  = String(Math.floor(Math.random() * 255))
        const blue: string  = String(Math.floor(Math.random() * 255))
        document.querySelector<HTMLElement>('.red-text')!.innerText = red
        document.querySelector<HTMLElement>('.green-text')!.innerText = green
        document.querySelector<HTMLElement>('.blue-text')!.innerText = blue
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    })
}

export {render as renderColorsPage}