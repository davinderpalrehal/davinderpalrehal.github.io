import './css/style.scss'
import daviLogo from './img/logo.png'
import {renderHomePage} from "./Pages/Home";
import { renderColorsPage } from './Pages/Colors';

const navigation = document.querySelector<HTMLDivElement>('#navigation')!

navigation.innerHTML = `
<header>
    <nav>
        <ul class="nav">
            <li><a href="#" data-project="/">Home</a></li>
        </ul>
    </nav>
    <h1 id="davi-logo"><img src="" alt="Davinderpal's face"></h1>
    </header>
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
                renderColorsPage(pageContent)
            }

            break
        default:
            if (pageContent) {
                renderHomePage(pageContent)
                const daviLogoImg: HTMLImageElement | null = document.querySelector<HTMLImageElement>('#davi-logo img')
                if (daviLogoImg) daviLogoImg.src = daviLogo
                console.log(daviLogo)
            }
            break

    }
}