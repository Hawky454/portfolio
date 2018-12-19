import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import Body from './components/Body/Body';
import Timeline from './components/Timeline/Timeline';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Body />, document.getElementById('body'));
ReactDOM.render(<Timeline />, document.getElementById('timeline'));
ReactDOM.render(<Contact />, document.getElementById('contact'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
