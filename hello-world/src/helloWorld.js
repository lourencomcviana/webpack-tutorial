import HelloWorldPage from "./components/hello-world-page/hello-world-page";

new HelloWorldPage().render();
if (process.env.NODE_ENV === 'production') {
    console.log('production mode');
} else if(process.env.NODE_ENV === 'development') {
    console.log('development mode');
} else {
    console.log('unknow mode');
}
