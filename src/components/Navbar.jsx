import { Container, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import NavLinks from '../components/NavLinks';
import MuiNextLink from '../utils/MuiNextLink';
import Sidebar from './Sidebar';

const navLinks = [
	{
		path: '/',
		title: 'Home',
	},
	{
		path: '/about',
		title: 'About',
	},
	{
		path: '/contact',
		title: 'Contact',
	},
];

export default function Navbar() {
	return (
		<Box>
			<AppBar position='static'>
				<Toolbar>
					<Container
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<MuiNextLink href='/'>
							<Typography variant='h6' color='white'>
								NExtMaTe
							</Typography>
						</MuiNextLink>

						<NavLinks navLinks={navLinks} />

						<Sidebar navLinks={navLinks} />
					</Container>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
