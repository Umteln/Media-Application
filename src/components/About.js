import {
	Box,
	Container,
	Typography,
	Stack,
	IconButton,
	Divider,
} from '@mui/material';
import { Discord, Patreon, Channel, Instagram } from '../utils/constants';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TextFieldsIcon from '@mui/icons-material/TextFields';

const About = () => {
	return (
		<Container
			p={3}
			sx={{
				overflowY: 'auto',
				height: '90vh',
				flex: 2,
				position: 'static',
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
					color: '#fff',
					fontWeight: '400',
					mt: 1,
					mb: 2,
				}}
			>
				Creating dynamic REACTIONS through great MUSIC and COMMENTARY.
			</Typography>
			<Box sx={{ p: 3, m: 'auto' }}>
				<Typography
					className='body-text'
					component='body1'
					sx={{
						color: 'white',
						fontWeight: 400,
						mb: 2,
					}}
				>
					Enjoy hundreds of videos on our various channels with over 42,000,000
					views on <a href={Channel}> YOUTUBE</a> . Keep up with all the
					conversations happening by joining our <a href={Discord}> DISCORD</a>.
					Don't forget to show your support by signing up for our{' '}
					<a href={Patreon}> PATREON </a>. You'll gain access to EXCLUSIVE
					content, such as, Live Streams, Member's Only Videos, Private Jam
					Sessions, and much more.{' '}
				</Typography>

				<Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
					<a href='https://tnt-store-7.creator-spring.com/'>
						<button className='about-btn'>
							<span className='icon'>
								<ShoppingCartIcon />
							</span>
							<span style={{ color: 'white' }}>Buy TNT Merch</span>
						</button>
					</a>
					<a href='https://tnt-store-7.creator-spring.com/'>
						<button className='about-btn'>
							<span className='icon'>
								<InstagramIcon />
							</span>
							<span style={{ color: 'white' }}>Follow Us On Instagram</span>
						</button>
					</a>
					<a href='https://tnt-store-7.creator-spring.com/'>
						<button className='about-btn'>
							<span className='icon'>
								<YouTubeIcon />
							</span>
							<span style={{ color: 'white' }}>Subscribe On YouTube</span>
						</button>
					</a>
				</Box>
			</Box>
		</Container>
	);
};

export default About;
