import Heading from "../heading/heading";
import MuffinImage from "../muffin-image/muffin-image";


export default class  MuffinPage {
    render () {
        const heading = new Heading();
        heading.render('muffin');
        const muffinImage = new MuffinImage();
        muffinImage.render();

        import('ImageCaptionApp/ImageCaption')
            .then((Module) => {
                const Component = Module.default;
                const imageCaptionComponent = new Component();
                imageCaptionComponent.render('Im a muffin!');
            })
    }
}
