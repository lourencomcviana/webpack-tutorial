import HelloWorldButton from '../hello-world-button/hello-world-button';
import Heading from "../heading/heading";

export default class HelloWorldPage {
    render () {
        const helloWorldButton = new HelloWorldButton();
        const heading = new Heading();
        heading.render('hello world');
        helloWorldButton.render();
    }
}
