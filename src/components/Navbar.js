import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/images/tnt_logo.png';

const Searchbar = () => {
	return (
		<Stack
			direction='row'
			alignItems='center'
			p={2}
			sx={{
				overflowY: 'auto',
				height: { sx: 'auto', md: '95%' },
				position: 'sticky',
				background: '#000',
				top: 0,
				justifyContent: 'space-between',
			}}
		>
			<Link
				to='/'
				style={{ display: 'flex', alignItems: 'flex-start' }}
			>
				<img
					src={logo}
					alt='logo'
					height={75}
					width={100}
				/>
			</Link>
		</Stack>
	);
};

export default Searchbar;
