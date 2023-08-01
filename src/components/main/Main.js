import React from 'react';
import Header from '../common/Header';
import Visual from './Visual';
import Categories from './Categories';
import Skills from './Skills';
import Youtube from './Youtube';
import Btns from './Btns';
import { useState, useEffect } from 'react';

function Main({ login }) {
	const [Scrolled, setScrolled] = useState(0);
	const [Pos, setPos] = useState([]);

	//메뉴를 최상단으로 이동 시킴
	useEffect(() => {
		window.onbeforeunload = function pushRefresh() {
			window.scrollTo(0, 0);
		};
	}, []);

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
