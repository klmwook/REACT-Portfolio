import React, { useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';

function Community() {
	const title = useRef(null);
	const content = useRef(null);
	const [Posts, setPosts] = useState(null);

	return (
		<>
			<Layout id={'Sub_Community'} name={'Community'}>
				<div className='contents'>
					<div className='Insert_Area'>
						<div className='input_Area'>
							<input type='text' name='name' autoComplete='off' required />
							<label>Name</label>
						</div>
						<textarea name='message' cols='30' rows='4' placeholder='Message' autoComplete='off'></textarea>
						<div className='btn_Area'>
							<button id='btn_Cancel' onClick={() => alert('Cancel')}>
								Cancel
							</button>
							<button id='btn_Write' onClick={() => alert('Write')}>
								Write
							</button>
						</div>
					</div>
					<div className='Show_Area'>
						<article>
							<div className='txt'>
								<h2>title</h2>
								<p>contents</p>
							</div>

							<nav className='btnSet'>
								<button onClick={() => alert('EDIT')}>EDIT</button>
								<button onClick={() => alert('DELETE')}>DELETE</button>
							</nav>
						</article>
					</div>
				</div>
			</Layout>
		</>
	);
}

export default Community;
