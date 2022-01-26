import './navigation-bar.scss';

export default class NavigationBar{
    render(navigationItems) {
        const liItems = navigationItems.map(navigationItem => `
        <li>
            <a href="${navigationItem.url}">${navigationItem.title}</a>
        </li>
        `)
        const ul = document.createElement('ul');
        ul.innerHTML = liItems.join();
        ul.classList.add('navigation-bar');
        const body = document.querySelector('body');
        body.appendChild(ul);
    }
}
