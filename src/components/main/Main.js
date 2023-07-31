import React from 'react';
import Header from '../common/Header';
import Visual from './Visual';
import Categories from './Categories';
import Skills from './Skills';
import Youtube from './Youtube';
import Btns from './Btns';
import { useState } from 'react';

function Main({ login }) {
	const [Scrolled, setScrolled] = useState(0);
	const [Pos, setPos] = useState([]);
	return (
		<main>
			<Header login={login} />
			<Visual />
			<Categories Scrolled={Scrolled} Pos={Pos[1]} />
			<Skills Scrolled={Scrolled} Pos={Pos[2]} />
			<Youtube Scrolled={Scrolled} Pos={Pos[3]} />
			<Btns setScrolled={setScrolled} setPos={setPos} />
		</main>
	);
}

export default Main;
