import { Box, TextField } from '@mui/material';

const SearchBar = ({ searchVideos }) => {
	return (
		<Box sx={{ border: '1px solid #fc1503 ' }}>
			<TextField
				sx={{ border: '1px solid #fc1503 ', backgroundColor: '#fff' }}
				placeholder={'Search'}
				onChange={searchVideos}
			/>
		</Box>
	);
};

export default SearchBar;
