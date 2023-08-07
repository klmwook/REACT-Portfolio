import { useRef, useState, useCallback } from 'react';
import Anime from '../../asset/anime';
import { useEffect } from 'react';
import { useThrottle } from '../../hooks/useThrottle';

function Btns({ setScrolled, setPos }) {
	const btnRef = useRef(null);
	const pos = useRef([]);
	const [Num, setNum] = useState(0);

	const getPos = useCallback(() => {
		pos.current = [];
		const secs = btnRef.current.parentElement.querySelectorAll('.myScroll');
		for (const sec of secs) pos.current.push(sec.offsetTop);
		setNum(pos.current.length);
		setPos(pos.current);
	}, []);

	const activation = useCallback(() => {
		console.log('activation');
		const base = -window.innerHeight / 2;
		const scroll = window.scrollY;
		const btns = btnRef.current.children;
		const boxs = btnRef.current.parentElement.querySelectorAll('.myScroll');

		pos.current.forEach((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				for (const box of boxs) box.classList.remove('on');
				btns[idx].classList.add('on');
				boxs[idx].classList.add('on');
			}
		});
	}, []);

	const getPos_Throttle = useThrottle(getPos);
	const activation_Throttle = useThrottle(activation);

	const changeScroll = useCallback(() => {
		const scroll = window.scrollY;
		setScrolled(scroll);
	}, [setScrolled]);

	useEffect(() => {
		getPos();
		window.addEventListener('resize', getPos_Throttle);
		window.addEventListener('scroll', activation_Throttle);
		window.addEventListener('scroll', changeScroll);
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

		return () => {
			window.removeEventListener('resize', getPos_Throttle);
			window.removeEventListener('scroll', activation_Throttle);
			window.removeEventListener('scroll', changeScroll);
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		};
	}, [getPos, getPos_Throttle, activation_Throttle, changeScroll]);

	return (
		<ul className='btnNavi' ref={btnRef}>
			{Array(Num)
				.fill()
				.map((_, idx) => {
					let defaultClass = '';
					if (idx === 0) defaultClass = 'on';
					return (
						<li
							key={idx}
							className={defaultClass}
							onClick={() => {
								new Anime(window, {
									prop: 'scroll',
									value: pos.current[idx],
									duration: 500,
								});
							}}
						></li>
					);
				})}
		</ul>
	);
}

export default Btns;
