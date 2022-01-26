import ImageCaption from './components/image-caption/image-caption.js'
new ImageCaption().render('Im a muffin!');
if (process.env.NODE_ENV === 'production') {
    console.log('production mode');
} else if(process.env.NODE_ENV === 'development') {
    console.log('development mode');
} else {
    console.log('unknow mode');
}
