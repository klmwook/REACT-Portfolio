import React from 'react';

function Skills() {
	return (
		<>
			<section id='skills'>
				<div className='wrap on'>
					{/* on 지워야 됨 */}
					<article className='top'>
						<div className='left'>
							<h1>
								Get the skills you <br />
								need for a job that <br />
								is in demand
							</h1>
						</div>
						<div className='right'>
							<p>The modern labor market dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
							{/* on 지워야 됨 */}
							<div className='number_area on'>
								<div className='number_area_left'>
									<h1>10</h1>
									<h2>
										YEARS
										<br />
										EXPERIENCES
									</h2>
								</div>
								<div className='bar'></div>
								<div className='number_area_right'>
									<h1>250</h1>
									<h2>
										TYPES OF <br /> COURSES
									</h2>
								</div>
							</div>
						</div>
					</article>
					<article className='bottom'>
						<div className='left'>
							<ul>
								<li>
									<div className='icon_area'>
										<img src={`${process.env.PUBLIC_URL}/img/main/ico_skills-leadership.svg`} alt='' />
									</div>
									<div>
										<strong>Leadership</strong>
										<p> Fully committed to the success company </p>
									</div>
								</li>
								<li>
									<div className='icon_area'>
										<img src={`${process.env.PUBLIC_URL}/img/main/ico_skills-responsibility.svg`} alt='' />
									</div>
									<div>
										<strong>Responsibility</strong>
										<p>Employees will always be my top priority</p>
									</div>
								</li>
								<li>
									<div className='icon_area'>
										<img src={`${process.env.PUBLIC_URL}/img/main/ico_skills-flexibility.svg`} alt='' />
									</div>
									<div>
										<strong>Flexibility</strong>
										<p>The ability to switch is an important skill</p>
									</div>
								</li>
							</ul>
						</div>
						<div className='right'>
							<div className='video_area'>
								<iframe
									src='https://player.vimeo.com/video/641585003?h=a359e6a27b&background=1&autoplay=1&loop=1&byline=0&title=0&quality=480p'
									width='100%'
									height='480px'
									frameBorder='0'
									allowFullScreen=''
									title='iframe_movie'
								></iframe>
							</div>
						</div>
					</article>
				</div>
			</section>
		</>
	);
}

export default Skills;
