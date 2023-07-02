import React from 'react';
import Header from '../common/Header';
import Visual from './Visual';
import Categories from './Categories';
import Skills from './Skills';
import Youtube from './Youtube';

function Main() {
	return (
		<main>
			<Header />
			<Visual />
			<Categories />
			<Skills />
			<Youtube />
		</main>
	);
}

export default Main;
