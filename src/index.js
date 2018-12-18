import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import Body from './components/Body/Body';
import Timeline from './components/Timeline/Timeline';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Body />, document.getElementById('body'));
ReactDOM.render(<Timeline />, document.getElementById('timeline'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
