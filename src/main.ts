import './style.scss'
import {renderHomePage} from "./Pages/Home";

const navigation = document.querySelector<HTMLDivElement>('#navigation')!

navigation.innerHTML = `
    <nav>
        <ul class="nav">
            <li><a href="#" data-project="/">Home</a></li>
            <li><a href="#"  data-project="colors">Colors</a></li>
            <li><a href="#"  data-project="another">Another route</a></li>
            <li><a href="#"  data-project="third">Third route</a></li>
            <li><a href="#"  data-project="fourth">Fourth route</a></li>
        </ul>
    </nav>
`

setPageContent()


const links: NodeListOf<HTMLLinkElement> = document.querySelectorAll<HTMLLinkElement>('.nav a')

links.forEach(link => {
    link.addEventListener('click', (event: Event) => {
        event.preventDefault()
        const linkClicked: HTMLLinkElement = <HTMLLinkElement>event.target
        if (linkClicked) {
            document.title = `Davinderpal | ${linkClicked.innerText}`
            history.pushState({
                    project: linkClicked.dataset.project
                },
                linkClicked.innerText,
                linkClicked.dataset.project
            )
            setPageContent()
        }
    })
})

function setPageContent() {
    const page: String = window.location.pathname
    const pageContent: HTMLElement | null = document.querySelector('#page-content')

    switch (page) {
        case '/colors':
            if (pageContent) {
                pageContent.innerHTML = '<h1>Colors Project</h1>'
                // renderHomePage(pageContent)
            }

            break
        default:
            if (pageContent) {
                renderHomePage(pageContent)
            }
            break

    }
}