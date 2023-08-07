import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';

import flickrReducer from './redux/flickrSlice';
import menuReducer from './redux/menuSlice';
import youtubeReducer from './redux/youtubeSlice';

const store = configureStore({
	reducer: {
		flickr: flickrReducer,
		menu: menuReducer,
		youtube: youtubeReducer,
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
