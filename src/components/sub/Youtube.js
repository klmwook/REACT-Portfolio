import { useEffect, useState, useRef } from 'react';
import Layout from '../common/Layout';
import axios from 'axios';
import Modal from '../common/Modal';

function Youtube() {
	const modal = useRef(null);
	const [Vids, setVids] = useState([]);
	const [Index, setIndex] = useState(0);

	const fecthYoutube = async () => {
		const key = 'AIzaSyDOsDRuQ_v0ISUQEy6mZdnCfcf3VKIG5uE';
		const list = 'PLGrvPC1Wr19hEuOc58RgKY1uPw_0eoIbE';
		const num = 10;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${list}&key=${key}&maxResults=${num}`;

		const result = await axios.get(url);
		setVids(result.data.items);
	};

	//최초의 데이터를 가져와야 되기 때문에 useEffect를 사용
	useEffect(() => fecthYoutube(), []);

	return (
		<>
			<Layout id={'Sub_Youtube'} name={'Youtube'}>
				<div className='contents'>
					<ul id='youtube_Result'>
						{Vids.map((Vid, idx) => {
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
				<iframe title={Vids[Index]?.id} src={`https://www.youtube.com/embed/${Vids[Index]?.snippet.resourceId.videoId}`}></iframe>
			</Modal>
		</>
	);
}

export default Youtube;
