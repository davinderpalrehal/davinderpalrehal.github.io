// import './css/style.scss'
import './base.css'
import daviLogo from './img/logo.png'
import {renderHomePage} from "./Pages/Home";
import { renderColorsPage } from './Pages/Colors';

const navigation = document.querySelector<HTMLDivElement>('#navigation')!

navigation.innerHTML = `
<header>
<h1 class='text-9xl font-bold underline'>Hello World!</h1>
    <nav>
        <ul class="nav">
            <li><a href="#" data-project="/">Home</a></li>
        </ul>
    </nav>
    <h1 id="davi-logo"><img src="" alt="Davinderpal's face"></h1>
    </header>
`

setPageContent()
buildNavigation()

function setPageContent() {
    const page: String = window.location.pathname
    const pageContent: HTMLElement | null = document.querySelector('#page-content')
    const body: HTMLBodyElement | null = document.querySelector('body')
    if (body) {
        body.style.backgroundColor = 'white'
    }

    switch (page) {
        case '/colors':
            if (pageContent) {
                renderColorsPage(pageContent)
            }
            body?.classList.remove('home-page')
            break
        default:
            if (pageContent) {
                renderHomePage(pageContent)
            }
            body?.classList.add('home-page')
            break
    }

    const daviLogoImg: HTMLImageElement | null = document.querySelector<HTMLImageElement>('#davi-logo img')
    if (daviLogoImg) daviLogoImg.src = daviLogo
    buildNavigation()
}

function buildNavigation() {
    const links: NodeListOf<HTMLLinkElement> = document.querySelectorAll<HTMLLinkElement>('a.js-link')

    links.forEach(link => {
        link.addEventListener('click', (event: Event) => {
            event.preventDefault()
            const linkClicked: HTMLLinkElement = <HTMLLinkElement>event.target
            if (linkClicked) {
                if (linkClicked.innerText === '<') {
                    document.title = `Davinderpal | Home`
                }
                else {
                    document.title = `Davinderpal | ${linkClicked.innerText}`
                }

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
}