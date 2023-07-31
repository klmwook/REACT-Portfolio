import React, { useRef } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Youtube({ Scrolled, Pos }) {
	const Youtube_Wrap = useRef(null);
	const Youtube_List = useRef(null);
	const Youtube_Prev = useRef(null);
	const Youtube_Next = useRef(null);

	const base = window.innerHeight / 2;

	window.addEventListener('scroll', () => {
		// console.log('Scrolled : ' + Scrolled);
		if (Scrolled >= Pos - base) {
			Youtube_Wrap.current.classList.add('on');
		}
	});

	function CgYouList(type) {
		if (type === 'prev') {
			Youtube_List.current.append(Youtube_List.current.firstElementChild);
			Youtube_Prev.current.classList.add('on');
			setTimeout(() => {
				Youtube_Prev.current.classList.remove('on');
			}, 500);
		} else if (type === 'next') {
			Youtube_List.current.prepend(Youtube_List.current.lastElementChild);
			Youtube_Next.current.classList.add('on');
			setTimeout(() => {
				Youtube_Next.current.classList.remove('on');
			}, 500);
		}
	}

	return (
		<>
			<section id='youtube' className='myScroll'>
				{/* on 지워야 됨 */}
				<div className='wrap' ref={Youtube_Wrap}>
					<h1>YouTube List</h1>
					<ul className='List' id='Youtube_List' ref={Youtube_List}>
						<li>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere dolores nesciunt cum quasi eius quos?</p>
							<div className='Info'>
								<div className='thumbnail'>
									<img src={`${process.env.PUBLIC_URL}/img/main/youtube_Calmdownman.jpg`} alt='침착맨' />
								</div>
								<div>
									<p>Lorem ipsum dolor sit amet.</p>
									<Link to='https://www.youtube.com/@calmdownman_data' target='_blank'>
										침착맨
									</Link>
								</div>
							</div>
						</li>
						<li>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta deleniti nulla voluptatibus. Vel, impedit inventore.</p>
							<div className='Info'>
								<div className='thumbnail'>
									<img src={`${process.env.PUBLIC_URL}/img/main/youtube_MusicMonster.jpg`} alt='MusicMonster' />
								</div>
								<div>
									<p>Lorem ipsum dolor sit amet.</p>
									<Link to='https://www.youtube.com/@musicmonster3218' target='_blank'>
										MusicMonster
									</Link>
								</div>
							</div>
						</li>
						<li>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit ullam quaerat? Minima, veniam?</p>
							<div className='Info'>
								<div className='thumbnail'>
									<img src={`${process.env.PUBLIC_URL}/img/main/youtube_Spotv.jpg`} alt='SPOTV' />
								</div>
								<div>
									<p>Lorem ipsum dolor sit amet.</p>
									<Link to='https://www.youtube.com/@SPOTV' target='_blank'>
										SPOTV
									</Link>
								</div>
							</div>
						</li>
						<li>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquam aliquid eos ipsam.</p>
							<div className='Info'>
								<div className='thumbnail'>
									<img src={`${process.env.PUBLIC_URL}/img/main/youtube_Waktaverse.jpg`} alt='Waktaverse' />
								</div>
								<div>
									<p>Lorem ipsum dolor sit amet.</p>
									<Link to='https://www.youtube.com/@waktaverse' target='_blank'>
										Waktaverse
									</Link>
								</div>
							</div>
						</li>
					</ul>
					<nav className='navi'>
						<p className='prev' id='arrow_prev' onClick={() => CgYouList('prev')} ref={Youtube_Prev}>
							<span></span>
						</p>

						<p className='next' id='arrow_next' onClick={() => CgYouList('next')} ref={Youtube_Next}>
							<span></span>
						</p>
					</nav>
				</div>
			</section>
		</>
	);
}

export default Youtube;
