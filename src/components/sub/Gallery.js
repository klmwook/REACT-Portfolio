import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/';
import Layout from '../common/Layout';

/* 
	데이터 가져오기 위한 설정 부터 하고
	reduxjs toolkit 설치 : npm i @reduxjs/toolkit react-redux
	Masonry 설치
*/

function Gallery() {
	const Items = useSelector((store) => store.flickr.data);
	const wrap = useRef(null);
	const Loading = useRef(null);
	const searchInput = useRef('');
	const enableEvent = useRef(true);
	const counter = useRef(0);

	const resetGallery = (e) => {
		enableEvent.current = false;
		Loading.current.Open();
		wrap.current.classList.remove('on');
	};

	useEffect(() => {
		//Loading.current.Open();
		enableEvent.current = true;
		wrap.current.classList.add('on');
	}, [wrap]);

	return (
		<>
			<Layout id={'Sub_Gallery'} title={'Gallery'} ref={Loading}>
				<div className='Search_Area'>
					<div className='input_Area'>
						<input type='text' required ref={searchInput} />
						<label>검색어 입력</label>
						<button>Search</button>
					</div>
					<div className='button_Area'>
						<button className='int'>Interest</button>
						<button className='my'>My</button>
					</div>
				</div>
				<div className='contents' ref={wrap}>
					<ul>
						{Items.map((item, idx) => {
							return (
								<li key={idx}>
									<div className='Img_Area'>
										<img
											className='thumb'
											src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
											alt={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`}
										/>
									</div>
									<div className='Img_Title'>
										<p>${item.title === '' ? 'Have a Good day!!' : item.title}</p>
									</div>
									<div className='Img_UserInfo'>
										<img
											src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`}
											alt={item.owner}
											onError={(e) => e.target.setAttribute('src', 'https://www.flickr.com/images/buddyicon.gif')}
										/>
										<span className='userid'>${item.owner}</span>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</Layout>
		</>
	);
}

export default Gallery;
