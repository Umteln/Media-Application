import { Box, Typography } from '@mui/material';
import Videos from './Videos';
import { useRecoilValue } from 'recoil';
import {
	searchedVideosAtom,
	searchTermAtom,
	videosAtom,
} from '../recoil/atoms';

const SearchFeed = () => {
	const videos = useRecoilValue(videosAtom);
	const searchTerm = useRecoilValue(searchTermAtom);

	return (
		<Box
			p={2}
			sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}
		>
			<Typography
				variant='h4'
				fontWeight='bold'
				mb={2}
				sx={{
					color: 'white',
				}}
			>
				Search Results for:{' '}
				<span style={{ color: '#F31503' }}>{searchTerm}</span>Videos
			</Typography>

			<Videos videos={videos} />
		</Box>
	);
};

export default SearchFeed;
