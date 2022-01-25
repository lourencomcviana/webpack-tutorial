import Heading from "./components/heading/heading";
import MuffinImage from "./components/muffin-image/muffin-image";
import _ from 'lodash'

const heading = new Heading();
heading.render(_.upperFirst('muffin'));
const muffinImage = new MuffinImage();
muffinImage.render();
