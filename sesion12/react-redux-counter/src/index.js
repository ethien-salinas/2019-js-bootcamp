import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './views/App';
import counter from './reducers'
import * as serviceWorker from './serviceWorker';

const store = createStore(counter)

const render = () => ReactDOM.render(<App store={store} />, document.getElementById('root'));

render()
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
