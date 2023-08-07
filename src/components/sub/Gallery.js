import React, { useEffect, useRef, useState } from 'react';
import Masonry from 'react-masonry-component';
import Layout from '../common/Layout';
import Modal from '../common/Modal';
import { useFlickrQuery } from '../../hooks/useFlickrQuery';

function Gallery() {
	const [Mounted, setMounted] = useState(true);
	const openModal = useRef(null);
	const [Index, setIndex] = useState(0);
	const [Opt, setOpt] = useState({ type: 'user', user: '198489363@N07' });
	const { data: Items, isSuccess } = useFlickrQuery(Opt);
	const wrap = useRef(null);
	const Loading = useRef(null);
	const searchInput = useRef('');
	const enableEvent = useRef(true);
	const counter = useRef(0);
	const firstLoaded = useRef(true);
	const isUser = useRef(true);

	const resetGallery = (e) => {
		enableEvent.current = false;
		Loading.current.Open();
		wrap.current.classList.remove('on');
	};

	//인기있는 갤러리 모음
	const showInterest = (e) => {
		if (!enableEvent.current) return;
		resetGallery(e);
		setOpt({ type: 'interest' });
		isUser.current = false;
	};

	//내 갤러리 모음
	const showMine = (e) => {
		if (!enableEvent.current) return;
		resetGallery(e);
		setOpt({ type: 'user', user: '198489363@N07' });
		isUser.current = true;
	};

	const showSearch = (e) => {
		const tag = searchInput.current.value.trim();
		if (tag === '') return alert('검색어를 입력하세요.');
		if (!enableEvent.current) return;

		resetGallery(e);
		setOpt({ type: 'search', tags: tag });
		searchInput.current.value = '';
		isUser.current = false;
	};

	useEffect(() => {
		Loading.current.Open();
		counter.current = 0;

		if (Mounted && isSuccess && Items.length === 0 && !firstLoaded.current) {
			Loading.current.Close();
			wrap.current.classList.add('on');
			setOpt({ type: 'user', user: '198489363@N07' });
			enableEvent.current = true;
			return alert('이미지 결과값이 없습니다.');
		}

		firstLoaded.current = false;
		const imgs = wrap.current.querySelectorAll('img');

		imgs.forEach((img) => {
			img.onload = () => {
				++counter.current;

				if (counter.current === imgs.length - 2) {
					Loading.current.Close();
					wrap.current.classList.add('on');
					enableEvent.current = true;
				}
			};
		});
	}, [Items, isSuccess]);

	return (
		<>
			<Layout id={'Sub_Gallery'} title={'Gallery'} ref={Loading}>
				<div className='Search_Area'>
					<div className='input_Area'>
						<input type='text' required ref={searchInput} onKeyPress={(e) => e.key === 'Enter' && showSearch(e)} />
						<label>검색어 입력</label>
						<button onClick={showSearch}>Search</button>
					</div>
					<div className='button_Area'>
						<button className='int' onClick={showInterest}>
							Interest
						</button>
						<button className='my' onClick={showMine}>
							My
						</button>
					</div>
				</div>
				<div className='contents' ref={wrap}>
					<Masonry elementType={'ul'} options={{ transitionDuration: '0.5s' }}>
						{isSuccess &&
							Items.map((item, idx) => {
								return (
									<li key={idx}>
										<div
											className='Img_Area'
											onClick={() => {
												openModal.current.Open();
												setIndex(idx);
											}}
										>
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
											<span
												className='userid'
												onClick={(e) => {
													if (isUser.current) return;
													isUser.current = true;
													wrap.current.classList.remove('on');
													setOpt({ type: 'user', user: e.target.innerText });
												}}
											>
												{item.owner}
											</span>
										</div>
									</li>
								);
							})}
					</Masonry>
				</div>
			</Layout>

			<Modal ref={openModal}>{isSuccess && <img src={`https://live.staticflickr.com/${Items[Index]?.server}/${Items[Index]?.id}_${Items[Index]?.secret}_b.jpg`} alt={Items[Index]?.title} />}</Modal>
		</>
	);
}

export default Gallery;
