import { Link } from 'react-router-dom';
import React from 'react';

function Footer() {
	return (
		<>
			<footer>
				<div className='wrap'>
					<div className='sitemap'>
						<h1>LOGO</h1>
						<div className='sitemap_Area'>
							<ul>
								<li>
									<span>Info</span>
								</li>
								<li>
									<span>Members</span>
								</li>
								<li>
									<span>Youtube</span>
								</li>
								<li>
									<span>Gallery</span>
								</li>
								<li>
									<span>Community</span>
								</li>
								<li>
									<span>Location</span>
								</li>
							</ul>
						</div>
						<div className='input_Area'>
							<p>Join our community</p>
							<div className='button_area'>
								<input type='text' placeholder='Enter your email' className='input_text' />
								<div className='submit_area'>
									<div className='checkbtn_area'>
										<img src={`${process.env.PUBLIC_URL}/img/main/ico-cheked.svg`} alt='' />
									</div>
									<input type='text' />
								</div>
							</div>
						</div>
					</div>
					<div className='SNS'>
						<div className='left'>
							<div>
								<img src={`${process.env.PUBLIC_URL}/img/main/logo-copyright.svg`} alt='' />
							</div>
							<span>2021 Halo Lab. All rights reserved</span>
						</div>
						<ul className='right'>
							<li>
								<div className='icon_img1'></div>
							</li>
							<li>
								<div className='icon_img2'></div>
							</li>
							<li>
								<div className='icon_img3'></div>
							</li>
						</ul>
					</div>
				</div>
			</footer>

			<section id='follow'>
				<div className='like_Follow'>
					<div>
						<img src={`${process.env.PUBLIC_URL}/img/main/follow-heart.svg`} alt='' />
					</div>
					<p>
						<Link to='#'>Like & Follow</Link> from you. New free to use projects from us.
					</p>
				</div>
			</section>
		</>
	);
}

export default Footer;
