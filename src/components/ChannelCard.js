import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';

import { demoProfilePicture } from '../utils/constants';
import { useRecoilValue } from 'recoil';
import { channelDetailsAtom, selectedIdStateAtom } from '../recoil/atoms';

const ChannelCard = ({ marginTop }) => {
	const detail = useRecoilValue(channelDetailsAtom);
	const id = useRecoilValue(selectedIdStateAtom);

	return (
		<Box
			sx={{
				boxShadow: 'none',
				borderRadius: '20px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: { xs: '356px', md: '320px' },
				height: '326',
				margin: 'auto',
				marginTop,
			}}
		>
			y
			<Link to={`/channel/${id}`}>
				<CardContent
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						textAlign: 'center',
						color: '#fff',
					}}
				>
					<CardMedia
						image={detail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
						alt={detail?.snippet?.title}
						sx={{
							borderRadius: '50%',
							height: '180px',
							width: '180px',
							mb: 2,
							border: '1px solid #e3e3e3',
						}}
					/>
					<Typography variant='h6'>
						{detail?.snippet?.title}
						<CheckCircle sx={{ fontsize: 14, color: 'grey', ml: '5px' }} />
					</Typography>
					{detail?.statistics?.subscriberCount && (
						<Typography>
							{parseInt(detail?.statistics?.subscriberCount).toLocaleString()}
						</Typography>
					)}
				</CardContent>
			</Link>
		</Box>
	);
};

export default ChannelCard;
