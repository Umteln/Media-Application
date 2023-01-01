import React from 'react';
import { Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import logo from '../assets/images/tnt_logo.png';

const Navbar = () => {
	return (
		<Stack
			className='nav'
			direction='row'
			alignItems='center'
			p={2}
			sx={{
				overflowY: 'auto',
				height: { sx: 'auto', md: '95%' },
				position: 'sticky',
				background: '#000',
				top: 0,
				display: 'flex',
			}}
		>
			<Link
				className='logo'
				to='/About'
				style={{ display: 'flex', alignItems: 'flex-start' }}
			>
				<img
					src={logo}
					alt='logo'
					height={75}
					width={100}
				/>
			</Link>
			<Link
				to='/'
				sx={{ display: 'flex', alignItems: 'flex-end' }}
			>
				<button className='category-btn'>
					<span className='icon'>
						<HomeIcon />
					</span>
					<span style={{ color: 'white' }}>Home</span>
				</button>
			</Link>
		</Stack>
	);
};

export default Navbar;
