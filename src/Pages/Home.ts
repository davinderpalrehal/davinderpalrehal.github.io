const template = `
    <section class="container">
        <h1>Full Stack Software Engineer</h1>
        <p class="subtitle">Hi, I'm <em>Davinderpal</em>,</p>
        <p>A Full Stack Software engineer from <a href="#">Nairobi</a>, <a href="#">Kenya</a>. Currently working at <a href="#">KOKO Networks</a> as a <a href="#">Team Lead</a> and <a href="#">Senior Engineer</a>.</p>
        <p>Most recently, I am trying to sharpen my <a href="#">TypeScript</a> skills so you will find some basic projects below.</p>        
    </section>
    
    <section class="container">
        <h2>Basic TypeScript Projects</h2>
        <ol>
        <li><a href=# class="js-link" data-project="colors">Colors</a></li>
        </ol>
    </section>
`

const render = (contentBlock: HTMLElement) => {
    contentBlock.innerHTML = template
}

export { render as renderHomePage }