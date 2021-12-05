import Muffin from './muffin.jpg'

export default function addImage() {
    const img = document.createElement('img');
    img.alt = 'muffin';
    img.width = 300;
    img.src = Muffin;
    const body  = document.querySelector('body');
    body.appendChild(img);
}
