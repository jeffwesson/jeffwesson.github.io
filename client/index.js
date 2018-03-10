import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './pages/App';

import reducer from '~/reducers';
import { showUnsavedFlash } from '~/actions';

let middleware = applyMiddleware(thunk);
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
	middleware = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__());
}
const store = createStore(reducer, {}, middleware);
const history = createHistory({
	getUserConfirmation: (message, callback) => {
		store.dispatch(showUnsavedFlash(message, callback, store.dispatch));
	},
});

if (process.env.NODE_ENV === 'production' && location.protocol !== 'https:') {
	location.href = location.href.replace(
		new RegExp(`^${location.protocol}`, 'i'),
		'https:'
	);
} else {
	render(
		<Provider store={store}>
			<Router history={history}>
				<App />
			</Router>
		</Provider>,
		document.getElementById('root')
	);
}