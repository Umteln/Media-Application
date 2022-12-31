import React from 'react';
import { Divider, Stack } from '@mui/material';
import { categories } from '../utils/constants';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Channel, Instagram } from '../utils/constants';
import IconButton from '@mui/material/IconButton';

const Sidebar = ({
	setSelectedCategory,
	selectedCategory,
	setSelectedID,
	selectedID,
}) => {
	return (
		<Stack
			direction='row'
			sx={{
				overflowY: 'auto',
				height: { sx: 'auto', md: '95%' },
				flexDirection: { md: 'column' },
				justifyContent: 'space-evenly',
			}}
		>
			{categories.map((category) => (
				<button
					className='category-btn'
					onClick={() => {
						setSelectedCategory(category.name);
						setSelectedID(category.id);
					}}
					style={{
						background: category.name === selectedCategory && '#FC1503',
						color: 'white',
					}}
					key={category.name}
				>
					<span
						style={{
							color: category.name === selectedCategory ? 'white' : '#FC1503',
							marginRight: '15px',
						}}
					>
						{category.icon}
					</span>
					<span
						style={{
							opacity: category.name === selectedCategory ? '1' : '0.8',
						}}
					>
						{category.name}
					</span>
				</button>
			))}

			<Divider
				sx={{ height: 5, margin: '20px 15px', borderRadius: 20 }}
				variant='inset'
				color='red'
				orientation='horizontal'
			/>

			<a href='https://tnt-store-7.creator-spring.com/'>
				<button className='category-btn'>
					<span style={{ color: 'red', marginRight: '15px' }}>
						<ShoppingCartIcon />
					</span>
					<span style={{ color: 'white' }}>Buy TNT Merch</span>
				</button>
			</a>
			<a href='https://www.patreon.com/user?u=15934121'>
				<button className='category-btn'>
					<span style={{ color: 'red', marginRight: '15px' }}>
						<TextFieldsIcon />
					</span>
					<span style={{ color: 'white' }}>Join our Patreon</span>
				</button>
			</a>
			<Stack
				direction='row'
				mt={2}
				p={1}
			>
				<IconButton href={Instagram}>
					<InstagramIcon sx={{ color: '#fff' }} />
				</IconButton>
				<IconButton href={Channel}>
					<YouTubeIcon sx={{ color: '#fff' }} />
				</IconButton>
				<IconButton component='label'>
					<MailOutlineIcon sx={{ color: '#fff' }} />
				</IconButton>
			</Stack>
		</Stack>
	);
};

export default Sidebar;
