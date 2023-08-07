import { useState, useRef, useEffect } from 'react';
import Layout from '../common/Layout';
import Modal from '../common/Modal';
import { useYoutubeQuery } from '../../hooks/useYoutubeQuery';

function Youtube() {
	const modal = useRef(null);
	const [Index, setIndex] = useState(0);
	const [Mounted, setMounted] = useState(true);
	const { data: Vids, isSuccess } = useYoutubeQuery();

	useEffect(() => {
		return () => setMounted(false);
	}, []);

	return (
		<>
			<Layout id={'Sub_Youtube'} title={'Youtube'}>
				<div className='contents'>
					<ul id='youtube_Result'>
						{isSuccess &&
							Mounted &&
							Vids.map((Vid, idx) => {
								let tit = Vid.snippet.title;
								let desc = Vid.snippet.description;
								let date = Vid.snippet.publishedAt;
								let channel = Vid.snippet.videoOwnerChannelTitle;

								return (
									<li key={idx}>
										<div className='you_title'>${tit.length > 50 ? tit.substr(0, 50) + '...' : tit}</div>
										<div className='you_desc'>
											<p>{desc.length > 200 ? desc.substr(0, 200) + '...' : desc}</p>
											<div className='channel_info'>
												<span className='channel'>{channel}</span>
												<span className='date'>{date.split('T')[0].split('-').join('.')}</span>
											</div>
										</div>
										<div
											className='you_thumb'
											onClick={() => {
												modal.current.Open();
												setIndex(idx);
											}}
										>
											<img className='thumb' src={Vid.snippet.thumbnails.standard.url} alt={Vid.snippet.resourceId.videoId} />
										</div>
									</li>
								);
							})}
					</ul>
				</div>
			</Layout>

			<Modal ref={modal}>
				{/* 첫 렌더링 싸이클에서는 Vids[0]의 객체 값 자체가 없음으로 없는 요소의 id값 호출 시 오류 */}
				{/* 옵셔널체이닝으로 해결 */}
				<iframe title={isSuccess && Mounted && Vids[Index]?.id} src={`https://www.youtube.com/embed/${isSuccess && Mounted && Vids[Index]?.snippet.resourceId.videoId}`}></iframe>
			</Modal>
		</>
	);
}

export default Youtube;
