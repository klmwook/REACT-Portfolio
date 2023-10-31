import React, { useEffect, useRef, useState } from 'react';

function Visual() {
	const Visual_Left = useRef(null);
	const Visual_Right = useRef(null);
	const Visual_Search = useRef(null);
	const [onFocus, setonFocus] = useState(0);

	const GoogleSearch = () => {
		if (Visual_Search.current.value === '') {
			alert('검색어를 입력 해 주세요.');
		} else {
			window.open(`https://www.google.com/search?q=${Visual_Search.current.value}`, '_blank');
		}
	};

	const infos = [
		{
			content: 'Lorem ipsum dolor sit amet.',
		},
		{
			content: 'Lorem ipsum',
		},
		{
			content: 'Lorem ipsum dolor',
		},
	];

	useEffect(() => {
		Visual_Left.current.classList.add('on');
		Visual_Right.current.classList.add('on');
	}, []);

	return (
		<>
			<section id='visual' className='myScroll'>
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
							<input type='text' placeholder='Search in Google' className='input_text' ref={Visual_Search} />
							<div className='submit_area'>
								<div className='checkbtn_area'>
									<img src={`${process.env.PUBLIC_URL}/img/main/ico-cheked.svg`} alt='ico-cheked.svg' />
								</div>
								<input type='text' onClick={() => GoogleSearch()} />
							</div>
						</div>
					</div>
					<div className='right' ref={Visual_Right}>
						{infos.map((info, idx) => {
							return (
								<div
									key={idx}
									className={idx === onFocus ? 'picture on' : 'picture'}
									onMouseOver={() => {
										setonFocus(idx);
									}}
								>
									<h1>{info.content}</h1>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default Visual;
