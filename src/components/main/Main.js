import React from 'react';
import Header from '../common/Header';
import Visual from './Visual';
import Categories from './Categories';
import Skills from './Skills';
import Youtube from './Youtube';

function Main({ login }) {
	return (
		<main>
			<Header login={login} />
			<Visual />
			<Categories />
			<Skills />
			<Youtube />
		</main>
	);
}

export default Main;
