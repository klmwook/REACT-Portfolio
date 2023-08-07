import { Route, Switch } from 'react-router-dom';

//Common
import Footer from './components/common/Footer';
import Header from './components/common/Header';

//Main
import Main from './components/main/Main';

//Sub
import Gallery from './components/sub/Gallery';
import Location from './components/sub/Location';
import Members from './components/sub/Members';
import Register from './components/sub/Register';
import Youtube from './components/sub/Youtube';
import Community from './components/sub/Community';

import './scss/style.scss';
import Login from './components/common/Login';
import { useEffect, useRef } from 'react';
import { fetchFlickr } from './redux/flickrSlice';
import { fetchYoutube } from './redux/youtubeSlice';

import { useDispatch } from 'react-redux';
import Menu from './components/common/Menu';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
	const login = useRef(null);

	const queryClient = new QueryClient();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchYoutube());
		dispatch(fetchFlickr({ type: 'user', user: '198489363@N07' }));
	}, [dispatch]);

	return (
		<QueryClientProvider client={queryClient}>
			<Switch>
				<Route exact path='/' render={() => <Main login={login} />} />
				<Route path='/' render={() => <Header login={login} />} />
			</Switch>

			<Route path='/Members' component={Members} />
			<Route path='/Youtube' component={Youtube} />
			<Route path='/Location' component={Location} />
			<Route path='/Community' component={Community} />
			<Route path='/Register' component={Register} />
			<Route path='/Gallery' component={Gallery} />

			<Footer />

			<Login ref={login} />
			<Menu login={login} />
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default App;
