import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from "./components/heading/heading";
const helloWorldButton = new HelloWorldButton();
const heading = new Heading();

helloWorldButton.render();
heading.render();

if (process.env.NODE_ENV === 'production') {
    console.log('production mode');
} else if(process.env.NODE_ENV === 'development') {
    console.log('development mode');
} else {
    console.log('unknow mode');
}
