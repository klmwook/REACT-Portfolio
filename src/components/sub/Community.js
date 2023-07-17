import React, { useEffect, useRef, useState } from 'react';
import Layout from '../common/Layout';

function Community() {
	const getLocalData = () => {
		const data = localStorage.getItem('post');
		if (data == null) {
			return [];
		} else {
			return JSON.parse(data);
		}
	};

	const title = useRef(null);
	const content = useRef(null);
	const editTitle = useRef(null);
	const editContent = useRef(null);
	const [Posts, setPosts] = useState(getLocalData());
	const [Allowed, setAllowed] = useState(true);

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

	const deletePost = (delIndex) => {
		if (!window.confirm('해당 게시글을 삭제하겠습니까?')) return;
		setPosts(Posts.filter((_, idx) => idx !== delIndex));
	};

	const enableUpdate = (editIndex) => {
		//수정모드 진입함수 호출시 Allowd가 true일때에만 로직이 실행되도록 처리
		if (!Allowed) return;
		//일직 로직이 실행되면 allowed값을 false로 바꿔서 이후부터는 다시 수정모드로 진입되는 것을 방지
		setAllowed(false);
		setPosts(
			Posts.map((post, postIndex) => {
				if (editIndex === postIndex) post.enableUpdate = true;
				return post;
			})
		);
	};

	const disableUpdate = (editIndex) => {
		setPosts(
			Posts.map((post, postIndex) => {
				if (editIndex === postIndex) post.enableUpdate = false;
				return post;
			})
		);
		setAllowed(true);
	};

	const updatePost = (editIndex) => {
		if (!editTitle.current.value.trim() || !editContent.current.value.trim()) {
			return alert('수정할 제목과 본문을 모두 입력하세요.');
		}

		setPosts(
			Posts.map((post, postIndex) => {
				if (postIndex === editIndex) {
					post.title = editTitle.current.value;
					post.content = editContent.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);
		setAllowed(true);
	};

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, [Posts]);

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
								<article key={idx}>
									{post.enableUpdate ? (
										<>
											<div className='txt'>
												<div className='input_Area'>
													<input type='text' name='name' autoComplete='off' defaultValue={post.title} required ref={editTitle} />
													<label>제목을 입력 하세요.</label>
												</div>
												<textarea cols='30' rows='3' defaultValue={post.content} ref={editContent}></textarea>
											</div>

											<nav className='btnSet'>
												<button onClick={() => disableUpdate(idx)}>CANCEL</button>
												<button onClick={() => updatePost(idx)}>UPDATE</button>
											</nav>
										</>
									) : (
										<>
											<div className='txt'>
												<h2>{post.title}</h2>
												<p>{post.content}</p>
											</div>

											<nav className='btnSet'>
												<button onClick={() => enableUpdate(idx)}>EDIT</button>
												<button onClick={() => deletePost(idx)}>DELETE</button>
											</nav>
										</>
									)}
								</article>
							);
						})}
					</div>
				</div>
			</Layout>
		</>
	);
}

export default Community;
