const template = `
    <h1>Davinderpal Singh Rehal</h1>
   <h2>Full Stack Web Developer</h2>
   <p>Hello world! I am a Full Stack Web Developer, based in Nairobi, Kenya with a special interest in Front-end development.</p>
   <p>In an attempt to learn TypeScript, this site will have a bunch of basic projects that are created in TS.</p>

   <h3>TypeScript Projects</h3>
   <ul>
     <li><a data-project="colors">Changing Background Colors Randomly</a></li>
 </ul>
`

const render = (contentBlock: HTMLElement) => {
    contentBlock.innerHTML = template
}

export { render as renderHomePage }