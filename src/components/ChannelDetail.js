import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Videos from './Videos';
import ChannelCard from './ChannelCard';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useSetRecoilState } from 'recoil';
import { channelDetailsAtom } from '../recoil/atoms';

const ChannelDetail = () => {
	const { id } = useParams();
	const setDetail = useSetRecoilState(channelDetailsAtom);
	const [videos, setVideos] = useState();

	useEffect(() => {
		fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
			setDetail(data?.items[0])
		);

		fetchFromAPI(`search?channelId=${id}&part=snippet& order=date`).then(
			(data) => setVideos(data?.items)
		);
	}, [id, setDetail]);

	return (
		<Box minHeight='95vh'>
			<Box>
				<div
					style={{
						background:
							'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(38,9,121,1) 48%, rgba(0,212,255,1) 100%)',
						zIndex: 10,
						height: '300px',
					}}
				/>
				<ChannelCard marginTop='-110px' />
			</Box>
			<Box
				display='flex'
				p='2'
			>
				<Box sx={{ mr: { sm: '100px' } }} />
				<Videos videos={videos} />
			</Box>
		</Box>
	);
};

export default ChannelDetail;
