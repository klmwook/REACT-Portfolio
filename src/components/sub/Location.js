import React, { useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';
import Anime from '../../asset/anime';
import emailjs from '@emailjs/browser';

function Location() {
	//카카오 톡 보여주는 함수
	const map = useRef(null);
	const map_list = useRef(null);
	const [Index, setIndex] = useState(0);
	const { kakao } = window;
	const infos = [
		{
			title: 'Seoul Head Office',
			phone: '010 - 5555 - 6666',
			position: new kakao.maps.LatLng(37.55478486270159, 126.96944912258016),
			imgSrc: `${process.env.PUBLIC_URL}/img/sub/Location_kakaomarker.png`,
			imgSize: new kakao.maps.Size(64, 64),
			imgPos: { offset: new kakao.maps.Point(32, 64) },
		},
		{
			title: 'Busan Subsidiary Company',
			phone: '010 - 3214 - 9514',
			position: new kakao.maps.LatLng(35.15944805474844, 129.16135499541983),
			imgSrc: `${process.env.PUBLIC_URL}/img/sub/Location_kakaomarker.png`,
			imgSize: new kakao.maps.Size(64, 64),
			imgPos: { offset: new kakao.maps.Point(32, 64) },
		},
		{
			title: 'Deajeon Subsidiary Company',
			phone: '+81 - 6666 - 7777',
			position: new kakao.maps.LatLng(36.37514311656888, 127.38133982113746),
			imgSrc: `${process.env.PUBLIC_URL}/img/sub/Location_kakaomarker.png`,
			imgSize: new kakao.maps.Size(64, 64),
			imgPos: { offset: new kakao.maps.Point(32, 64) },
		},
	];
	const mapOption = {
		center: infos[Index].position, // 지도의 중심좌표
		level: 3, // 지도의 확대 레벨
	};
	const imgSrc = infos[Index].imgSrc;
	const imgSize = infos[Index].imgSize;
	const imgPos = infos[Index].imgPos;
	const markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize, imgPos);
	const marker = new kakao.maps.Marker({ position: mapOption.center, image: markerImg });

	useEffect(() => {
		map.current.innerHTML = '';
		const mapInstance = new kakao.maps.Map(map.current, mapOption);
		marker.setMap(mapInstance);

		mapInstance.setZoomable(false);

		mapInstance.addControl(new kakao.maps.MapTypeControl(), kakao.maps.ControlPosition.TOPRIGHT);
		mapInstance.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.RIGHT);

		const setCenter = () => {
			mapInstance.setCenter(infos[Index].position);
		};

		window.addEventListener('resize', setCenter);

		return () => window.removeEventListener('resize', setCenter);
	}, [Index]);

	//이메일 전송 로직
	const contact_form = useRef(null);
	const e_Name = useRef(null);
	const e_ReplyTo = useRef(null);
	const e_Interest = useRef(null);
	const e_Phone = useRef(null);
	const e_Message = useRef(null);
	const [Success, setSuccess] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_Portfolio', 'template_zdeoxxk', contact_form.current, 'DuVGSRIP4uXIG234N').then(
			(result) => {
				console.log(result.text);

				setSuccess(true);
				e_Name.current.value = '';
				e_ReplyTo.current.value = '';
				e_Interest.current.value = '';
				e_Phone.current.value = '';
				e_Message.current.value = '';
			},
			(error) => {
				console.log(error.text);
				setSuccess(false);
			}
		);
	};

	return (
		<>
			<Layout id={'Sub_Location'} name={'Location'}>
				<div className='contents'>
					<div className='Contact_Us'>
						<div className='left'>
							<div className='left_title'>
								<h1>Send a Message</h1>
							</div>
							<div className='left_sub_title'>
								<h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam assumenda amet nemo iure blanditiis enim?</h2>
							</div>
							<form id='contact-form' onSubmit={sendEmail} ref={contact_form}>
								<input type='hidden' name='contact_number' />
								<ul>
									<li>
										<div className='input_Area'>
											<input type='text' name='name' autoComplete='off' ref={e_Name} required />
											<label>Name</label>
										</div>
									</li>
									<li>
										<div className='input_Area'>
											<input type='text' name='reply_to' autoComplete='off' ref={e_ReplyTo} required />
											<label>Email Address</label>
										</div>
									</li>
									<li>
										<div className='input_Area'>
											<input type='text' name='Interest' autoComplete='off' ref={e_Interest} required />
											<label>Interested</label>
										</div>
									</li>
									<li>
										<div className='input_Area'>
											<input type='text' name='Phone' autoComplete='off' ref={e_Phone} required />
											<label>Phone Number</label>
										</div>
									</li>
									<li>
										<textarea name='message' cols='30' rows='4' placeholder='Message' ref={e_Message} autoComplete='off'></textarea>
									</li>
								</ul>
								<div className='btn_Area'>
									<button id='btn_Submit' onClick={() => sendEmail}>
										Send
									</button>
								</div>
							</form>
						</div>
						<div className='right'>
							<ul id='map_list' ref={map_list}>
								{infos.map((info, idx) => {
									return (
										<li
											key={idx}
											className={idx === Index ? 'on' : ''}
											onClick={() => {
												setIndex(idx);
												new Anime(window, {
													prop: 'scroll',
													value: map.current.offsetTop - 150,
													duration: 500,
												});
											}}
										>
											<div className='right_title'>
												<h1>{info.title}</h1>
											</div>
											<div className='right_sub_title'>
												<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consequuntur dolorum dolore consectetur dolor quas.</h2>
											</div>
											<div className='phone_Area'>
												<div className='icon_Area'>
													<svg viewBox='0 0 512 512'>
														<path d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z' />
													</svg>
												</div>
												<span>{info.phone}</span>
											</div>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
					<div className='Map_Area'>
						<div id='map' ref={map}></div>
					</div>
				</div>
			</Layout>
		</>
	);
}

export default Location;
