import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fecthYoutube = async () => {
	const key = process.env.REACT_APP_YOUTUBE_API_KEY;
	const list = 'PLGrvPC1Wr19hEuOc58RgKY1uPw_0eoIbE';
	const num = 10;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${list}&key=${key}&maxResults=${num}`;
	const response = await axios.get(url);

	return response.data.items;
};

export const useYoutubeQuery = () => {
	return useQuery(['youtubeData'], fecthYoutube, {
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		cacheTime: 1000 * 20,
		staleTime: 1000 * 20,
	});
};
