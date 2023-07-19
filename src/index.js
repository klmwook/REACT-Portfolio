import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import flickrReducer from './redux/flickrSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		flickr: flickrReducer,
	},
});

ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>,
	document.getElementById('root')
);
