import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

//change website title
document.title = "Froopyland Explorer";

//change website description
document.querySelector('meta[name="description"]').setAttribute('content', "Froopyland Blockchain Explorer BETA - Owner Enzifiri");

const rootElement = document.getElementById("root");
render( <App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();