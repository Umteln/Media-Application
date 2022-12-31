import { Box, Container, Typography } from '@mui/material';
import { Discord, Patreon, Channel } from '../utils/constants';

const About = () => {
	return (
		<Container
			p={3}
			sx={{
				overflowY: 'auto',
				height: '90vh',
				flex: 2,
			}}
		>
			<Typography
				variant='h2'
				fontWeight='bold'
				sx={{
					padding: 2,
					alignItems: 'center',
					color: '#F31503',
					mt: 5,
					mb: 2,
				}}
			>
				The Adventures of <span style={{ color: 'white' }}>TNT</span>
			</Typography>
			<Typography
				variant='h6'
				sx={{
					padding: 2,
					alignItems: 'center',
					color: 'white',
					fontWeight: '400',
					mt: 1,
					mb: 2,
				}}
			>
				Creating dynamic{' '}
				<span style={{ color: '#F31503', fontSize: '24px' }}>REACTIONS</span>{' '}
				through great{' '}
				<span style={{ color: '#F31503', fontSize: '24px' }}>MUSIC</span> and{' '}
				<span style={{ color: '#F31503', fontSize: '24px' }}>COMMENTARY</span>.
			</Typography>
			<Box sx={{ p: 3, m: 'auto' }}>
				<Typography
					component='body1'
					sx={{
						color: 'white',
						fontWeight: 400,
						mb: 2,
					}}
				>
					Enjoy hundreds of videos on our various channels with over
					<span style={{ color: '#F31503' }}> 42,000,000 </span>
					views on{' '}
					<a href={Channel}>
						<span style={{ color: '#F31503' }}> YOUTUBE </span>
					</a>{' '}
					. Keep up with all the conversations happening by joining our{' '}
					<a href={Discord}>
						<span style={{ color: '#F31503' }}> DISCORD COMMUNITY </span>
					</a>
					. Don't forget to show your support by signing up for our{' '}
					<a href={Patreon}>
						<span style={{ color: '#F31503' }}> PATREON</span>{' '}
					</a>
					. You'll gain access to
					<span style={{ color: '#F31503' }}> EXCLUSIVE </span> content, such
					as, Live Streams, Member's Only Videos, Private Jam Sessions, and much
					more.{' '}
				</Typography>
			</Box>
		</Container>
	);
};

export default About;
