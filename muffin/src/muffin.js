import Heading from "./components/heading/heading";
import MuffinImage from "./components/muffin-image/muffin-image";

const heading = new Heading();
heading.render('muffin');
const muffinImage = new MuffinImage();
muffinImage.render();

import('HelloWorldApp/HelloWorldButton')
    .then(HelloWordButtonModule =>{
        const HelloWordButton = HelloWordButtonModule.default;
        const helloWordButton = new HelloWordButton();
        helloWordButton.render();
    })
