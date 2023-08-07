import React, { useEffect, useRef, useState } from 'react';
import { useMemberQuery } from '../../hooks/useMemberQuery';

function Members() {
	const [Mounted, setMounted] = useState(true);
	const { data: Members, isSuccess } = useMemberQuery();
	const Tab_Area = useRef(null);

	//on classList를 넣어야 되서 useEffect를 추가하였음.
	useEffect(() => {
		Tab_Area.current.classList.add('on');
		return () => setMounted(false);
	}, []);

	return (
		<>
			<section id='Sub_Members'>
				<div className='wrap'>
					<div className='Description_Area'>
						<div className='icon_Area'>
							<div className='Members_icon'></div>
						</div>
						<h1>Our Team</h1>
						<h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.</h2>
					</div>

					<ul className='Tab_Area' ref={Tab_Area}>
						{isSuccess &&
							Mounted &&
							Members.map((Member, idx) => {
								return (
									<li key={idx}>
										<div className='pic_Area'>
											<div className='pic'>
												<img src={`${process.env.PUBLIC_URL}/img/sub/${Member.pic}`} alt='' className='pic_img' />
											</div>
										</div>
										<div className='Name'>{Member.name}</div>
										<div className='Position'>{Member.position}</div>
										<div className='SNS_Area'>
											<div className='SNS'>
												<div className='icon_img1'></div>
											</div>
											<div className='SNS'>
												<div className='icon_img2'></div>
											</div>
											<div className='SNS'>
												<div className='icon_img3'></div>
											</div>
										</div>
									</li>
								);
							})}
					</ul>
				</div>
			</section>
		</>
	);
}

export default Members;
