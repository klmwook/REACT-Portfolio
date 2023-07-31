import React, { useRef } from 'react';

function Categories({ Scrolled, Pos }) {
	const Categories_Wrap = useRef(null);
	const base = window.innerHeight / 2;

	window.addEventListener('scroll', () => {
		// console.log('Scrolled : ' + Scrolled);
		if (Scrolled >= Pos - base) {
			Categories_Wrap.current.classList.add('on');
			Categories_Wrap.current.querySelectorAll('.img li').forEach((li, idx) => {
				li.classList.add('on');
			});
		}
	});

	return (
		<>
			<section id='categories' className='myScroll'>
				<div className='wrap' ref={Categories_Wrap}>
					<h1>Unlimited access to 100+ instructors.</h1>
					<ul className='tab'>
						<li className='on'>
							<span>All categories</span>
						</li>
						<li>
							<span>Entertainment</span>
						</li>
						<li>
							<span>Lifestyle</span>
						</li>
						<li>
							<span>Writing</span>
						</li>
						<li>
							<span>Business</span>
						</li>
						<li>
							<span>Food</span>
						</li>
					</ul>

					<ul className='img'>
						<li>
							<div className='img img1'></div>
							<strong>Sales Marketing</strong>
							<p>4 month</p>
						</li>
						<li>
							<div className='img img2'></div>
							<strong>Data analyics</strong>
							<p>3 month</p>
						</li>
						<li>
							<div className='img img3'></div>
							<strong>Copywriting Pro</strong>
							<p>2 month</p>
						</li>
						<li>
							<div className='img img4'></div>
							<strong>Design art</strong>
							<p>4 month</p>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

export default Categories;
