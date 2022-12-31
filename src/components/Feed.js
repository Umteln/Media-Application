import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import About from './About';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useRecoilState } from 'recoil';
import { categoryStateAtom, selectedIdStateAtom } from '../recoil/atoms';

const Feed = () => {
	const [selectedCategory, setSelectedCategory] =
		useRecoilState(categoryStateAtom);
	const [selectedID, setSelectedID] = useRecoilState(selectedIdStateAtom);
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetchFromAPI(
			`search?channelId=${selectedID}&part=snippet&q=${selectedCategory}`
		).then((data) => {
			setVideos(data.items);
		});
	}, [selectedCategory, selectedID]);

	console.log(videos);

	return (
		<Stack
			className='svg-back'
			sx={{
				flexDirection: {
					sx: 'column',
					md: 'row',
				},
			}}
		>
			<Box
				sx={{
					height: { sx: 'auto', md: '92vh' },
					borderRight: '1px solid #3d3d3d',
					px: { sx: 0, md: 2 },
				}}
			>
				<Sidebar
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
					selectedID={selectedID}
					setSelectedID={setSelectedID}
				/>

				<Typography
					className='copyright'
					variant='body2'
					sx={{ mt: 1.5, color: '#ffff' }}
				>
					Copyright 2022 TNT Media
				</Typography>
			</Box>

			<Box
				p={2}
				sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}
			>
				{selectedCategory !== 'Home' && (
					<>
						<Typography
							variant='h4'
							fontWeight='bold'
							mb={2}
							sx={{
								color: 'white',
							}}
						>
							{selectedCategory}
						</Typography>

						<Videos videos={videos} />
					</>
				)}
				{selectedCategory === 'Home' && <About />}
			</Box>
		</Stack>
	);
};

export default Feed;
