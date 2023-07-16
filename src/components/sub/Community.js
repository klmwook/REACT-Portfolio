import React, { useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';

function Community() {
	const title = useRef(null);
	const content = useRef(null);
	const [Posts, setPosts] = useState(null);

	const resetForm = () => {
		title.current.value = '';
		content.current.value = '';
	};

	const createPost = () => {
		if (!title.current.value.trim() || !content.current.value.trim()) {
			resetForm();
			return alert('제목과 본문을 모두 입력하세요.');
		}
		setPosts([{ title: title.current.value, content: content.current.value }, ...Posts]);
		resetForm();
	};

	return (
		<>
			<Layout id={'Sub_Community'} name={'Community'}>
				<div className='contents'>
					<div className='Insert_Area'>
						<div className='input_Area'>
							<input type='text' name='name' autoComplete='off' required ref={title} />
							<label>제목을 입력 하세요.</label>
						</div>
						<textarea name='message' cols='30' rows='4' placeholder='본문을 입력하세요.' autoComplete='off' ref={content}></textarea>
						<div className='btn_Area'>
							<button onClick={() => resetForm()}>Cancel</button>
							<button onClick={() => createPost()}>Write</button>
						</div>
					</div>
					<div className='Show_Area'>
						{Posts.map((post, idx) => {
							return (
								<>
									<div className='txt'>
										<h2>{post.title}</h2>
										<p>{post.content}</p>
									</div>

									<nav className='btnSet'>
										<button onClick={() => alert(idx)}>EDIT</button>
										<button onClick={() => alert(idx)}>DELETE</button>
									</nav>
								</>
							);
						})}

						{/* <article>
							<div className='txt'>
								<h2>title</h2>
								<p>contents</p>
							</div>

							<nav className='btnSet'>
								<button onClick={() => alert('EDIT')}>EDIT</button>
								<button onClick={() => alert('DELETE')}>DELETE</button>
							</nav>
						</article> */}
					</div>
				</div>
			</Layout>
		</>
	);
}

export default Community;
