import NavigationBar from './components/navigation-bar/navigation-bar.js'
const url = window.location.pathname;
const navigationItems = [
    {
        url: '/hello-world-page',
        title: 'hello world page',
        app: 'HelloWorldApp/HelloWorldPage'
    },
    {
        url: '/muffin-page',
        title: 'muffin page',
        app: 'MuffinApp/MuffinPage'
    }
]

const navigationBar = new NavigationBar();

navigationBar.render(navigationItems);


if(url === '/hello-world-page') {
    import('HelloWorldApp/HelloWorldPage')
        .then(renderPage)
} else if(url === '/muffin-page') {
    import('MuffinApp/MuffinPage')
        .then(renderPage)
}
function renderPage(Module) {
    const Page = Module.default;
    const page = new Page();
    page.render();
}
