import './hello-world-button.scss';

export default class HelloWorldButton {
    helloWorldButtonCssClass = 'hello-world-button';
    render() {
        const body = document.querySelector('body');
        const button = document.createElement('button');

        button.classList.add(this.helloWorldButtonCssClass);
        button.innerHTML = 'Hello World';
        button.onclick = function () {
            const p =  document.createElement('p');
            p.innerHTML = 'Hello World';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        }
        body.appendChild(button);
    }
}
