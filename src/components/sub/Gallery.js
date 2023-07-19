import React, { useEffect, useRef, useState } from 'react';
import { UseSelector, useSelector } from 'react-redux/';
import Layout from '../common/Layout';

/* 
	데이터 가져오기 위한 설정 부터 하고
	reduxjs toolkit 설치 : npm i @reduxjs/toolkit react-redux
	Masonry 설치
*/

function Gallery() {
	useSelector((store) => console.log(store));

	return (
		<>
			<Layout id={'Sub_Gallery'} name={'Gallery'}>
				<div className='contents'>
					<ul>
						<li>
							<div class='Img_Area'>
								<img src='' alt='IMG' />
							</div>
							<div class='Img_Title'>
								<p>Title 영역 입니다.</p>
							</div>
							<div class='Img_UserInfo'>
								<img src='' alt='IMG' />
								<span>Hello</span>
							</div>
						</li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div class='loading_Area'>
					<img src={`${process.env.PUBLIC_URL}/img/sub/loading.gif`} alt='loading' class='loading' />
				</div>
			</Layout>
		</>
	);
}

export default Gallery;
