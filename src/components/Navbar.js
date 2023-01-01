import React from 'react';
import { Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import logo from '../assets/images/tnt_logo.png';
import { Channel, Instagram } from '../utils/constants';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
				justifyContent: 'flex-start',
			}}
		>
			<div>
				<Link
					className='logo'
					to='/'
					style={{ display: 'flex', alignItems: 'flex-start' }}
				>
					<img
						className='logo'
						src={logo}
						alt='logo'
						height={75}
						width={100}
					/>
				</Link>
			</div>

			<Stack direction='row'>
				<Link to='/About'>
					<button className='nav-btn'>
						<span className='icon'>
							<HomeIcon />
						</span>
					</button>
				</Link>

				<a href='https://tnt-store-7.creator-spring.com/'>
					<button className='nav-btn'>
						<span className='icon'>
							<ShoppingCartIcon />
						</span>
					</button>
				</a>
				<a href={Instagram}>
					<button className='nav-btn'>
						<span className='icon'>
							<InstagramIcon />
						</span>
					</button>
				</a>
				<a href={Channel}>
					<button className='nav-btn'>
						<span className='icon'>
							<YouTubeIcon />
						</span>
					</button>
				</a>
			</Stack>
		</Stack>
	);
};

export default Navbar;
