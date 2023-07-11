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

import './scss/style.scss';
import Login from './components/common/Login';
import { useRef } from 'react';
function App() {
	const login = useRef(null);

	return (
		<>
			<Switch>
				<Route exact path='/' render={() => <Main LoginBtn={login} />} />
				<Route path='/' render={() => <Header LoginBtn={login} />} />
			</Switch>

			<Route path='/Members' component={Members} />
			<Route path='/Youtube' component={Youtube} />
			<Route path='/Location' component={Location} />
			<Route path='/Register' component={Register} />
			<Footer />

			<Login ref={login} />
		</>
	);
}

export default App;
