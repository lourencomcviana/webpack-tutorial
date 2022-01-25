import Muffin from './muffin.jpg';
import './muffin-image.scss'

export default class MuffinImage {
    render() {
        const img = document.createElement('img');
        img.src = Muffin;
        img.alt = 'Muffin'
        img.classList.add('muffin-image')

        const body = document.querySelector('body');
        body.appendChild(img);
    }
}
