import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/';
import Layout from '../common/Layout';

/* 
	데이터 가져오기 위한 설정 부터 하고
	reduxjs toolkit 설치 : npm i @reduxjs/toolkit react-redux
	Masonry 설치
*/

function Gallery() {
	const dispatch = useDispatch();
	const Items = useSelector((store) => store.flickr.data);
	const Loading = useSelector((store) => console.log(store.loading));

	const wrap = useRef(null);

	useEffect(() => {
		//Loading.current.classList.add('off');
		//dispatch(Loading?.open());
		wrap.current.classList.add('on');
	}, [wrap]);

	return (
		<>
			<Layout id={'Sub_Gallery'} name={'Gallery'}>
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
