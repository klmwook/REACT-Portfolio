import React, { useEffect, useRef } from 'react';

function Visual() {
	const Visual_Left = useRef(null);
	const Visual_Right = useRef(null);

	useEffect(() => {
		Visual_Left.current.classList.add('on');
		Visual_Right.current.classList.add('on');
	}, []);

	return (
		<>
			<section id='visual'>
				<div className='wrap'>
					<div className='left' ref={Visual_Left}>
						<h1>
							Watch.
							<br />
							Learn.
							<br />
							Grow.
						</h1>
						<div className='search_area'>
							<input type='text' placeholder='Find your passion' className='input_text' />
							<div className='submit_area'>
								<div className='checkbtn_area'>
									<img src={`${process.env.PUBLIC_URL}/img/main/ico-cheked.svg`} alt='ico-cheked.svg' />
								</div>
								<input type='text' />
							</div>
						</div>
					</div>
					<div className='right' ref={Visual_Right}>
						<div className='picture on'>
							<h1>Lorem ipsum dolor sit amet.</h1>
						</div>
						<div className='picture'>
							<h1>Lorem ipsum</h1>
						</div>
						<div className='picture'>
							<h1>Lorem ipsum</h1>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Visual;
