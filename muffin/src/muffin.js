import MuffinPage from "./components/muffin-page/muffin-page.js";

new MuffinPage().render();


import('HelloWorldApp/HelloWorldButton')
    .then(HelloWordButtonModule =>{
        const HelloWordButton = HelloWordButtonModule.default;
        const helloWordButton = new HelloWordButton();
        helloWordButton.render();
    })
