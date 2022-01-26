import Heading from "../heading/heading";
import MuffinImage from "../muffin-image/muffin-image";

export default class  MuffinPage {
    render () {
        const heading = new Heading();
        heading.render('muffin');
        const muffinImage = new MuffinImage();
        muffinImage.render();
    }
}
