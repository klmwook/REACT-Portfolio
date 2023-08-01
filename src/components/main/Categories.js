import React, { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Categories({ Scrolled, Pos }) {
	const Categories_Wrap = useRef(null);
	const base = window.innerHeight / 2;
	const [Menus, setMenus] = useState(['All categories', 'Entertainment', 'Lifestyle', 'Writing', 'Business']);
	const [Index, setIndex] = useState(0);
	const [first, setfirst] = useState(false);

	const infos = [
		{
			title: 'Sales Marketing',
			date: '4 month',
		},
		{
			title: 'Data analyics',
			date: '3 month',
		},
		{
			title: 'Copywriting Pro',
			date: '2 month',
		},
		{
			title: 'Design art',
			date: '4 month',
		},
	];

	const setCategories = () => {
		if (Scrolled >= Pos - base) {
			Categories_Wrap.current.classList.add('on');

			if (!first) {
				Categories_Wrap.current.querySelectorAll('.img li').forEach((li, idx) => {
					li.classList.add('on');
				});
				setfirst(true);
			}
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', setCategories);

		return () => {
			window.removeEventListener('scroll', setCategories);
		};
	});

	return (
		<>
			<section id='categories' className='myScroll'>
				<div className='wrap' ref={Categories_Wrap}>
					<h1>Unlimited access to 100+ instructors.</h1>
					<ul className='tab'>
						{Menus.map((Menu, idx) => {
							return (
								<li key={idx} className={idx === Index ? 'on' : ''} onClick={() => setIndex(idx)}>
									<span>{Menu}</span>
								</li>
							);
						})}
					</ul>

					<ul className='img'>
						{infos.map((info, idx) => {
							return (
								<li className={first && Index === 0 ? 'on' : '' || idx === Index - 1 ? 'selected' : 'none'}>
									<div className={`img img${idx + 1}`}></div>
									<strong>{info.title}</strong>
									<p>{info.date}</p>
								</li>
							);
						})}
					</ul>
				</div>
			</section>
		</>
	);
}

export default Categories;
