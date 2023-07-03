import React from 'react';
import Layout from '../common/Layout';

function Location() {
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
							<form id='contact-form'>
								<input type='hidden' name='contact_number' />
								<ul>
									<li>
										<div className='input_Area'>
											<input type='text' name='name' autocomplete='off' required />
											<label>Name</label>
										</div>
									</li>
									<li>
										<div className='input_Area'>
											<input type='text' name='reply_to' autocomplete='off' required />
											<label>Email Address</label>
										</div>
									</li>
									<li>
										<div className='input_Area'>
											<input type='text' name='Interest' autocomplete='off' required />
											<label>Interested</label>
										</div>
									</li>
									<li>
										<div className='input_Area'>
											<input type='text' name='Phone' autocomplete='off' required />
											<label>Phone Number</label>
										</div>
									</li>
									<li>
										<textarea name='message' cols='30' rows='4' placeholder='Message' autocomplete='off'></textarea>
									</li>
								</ul>
								<div className='btn_Area'>
									<button id='btn_Submit'>Send</button>
								</div>
							</form>
						</div>
						<div className='right'>
							<ul id='map_list'>
								<li className='on'>
									<div className='right_title'>
										<h1>Seoul Head Office</h1>
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
										<span>010 - 5555 - 6666</span>
									</div>
								</li>
								<li>
									<div className='right_title'>
										<h1>Busan Subsidiary Company</h1>
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
										<span>010 - 3214 - 9514</span>
									</div>
								</li>
								<li>
									<div className='right_title'>
										<h1>Deajeon Subsidiary Company</h1>
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
										<span>+81 - 6666 - 7777</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className='Map_Area'>
						<div id='map'></div>
					</div>
				</div>
			</Layout>
		</>
	);
}

export default Location;
