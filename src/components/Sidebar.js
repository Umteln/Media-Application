import React from 'react';
import { Divider, Stack } from '@mui/material';
import { categories } from '../utils/constants';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TextFieldsIcon from '@mui/icons-material/TextFields';

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
				position: { md: 'sticky' },
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
		</Stack>
	);
};

export default Sidebar;
