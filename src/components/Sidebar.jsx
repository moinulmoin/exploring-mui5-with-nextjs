import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import MuiNextLink from '../utils/MuiNextLink';

export default function Sidebar({ navLinks }) {
	const [showMobileMenu, setShowMobileMenu] = React.useState(false);

	const toggleDrawer = (open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setShowMobileMenu(open);
	};

	const list = () => (
		<Box
			sx={{
				width: 250,
				pt: 6,
			}}
			role='presentation'
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<Stack spacing={1}>
				{navLinks.map((link, index) => (
					<MuiNextLink
						href={link.path}
						key={`${link.title + index}`}
						underline='none'
						sx={{ textAlign: 'center' }}
					>
						<Button>{link.title}</Button>
					</MuiNextLink>
				))}
			</Stack>
		</Box>
	);

	return (
		<Box sx={{ display: { md: 'none' } }}>
			<Button sx={{ color: 'white' }} onClick={toggleDrawer(true)}>
				<MenuOutlinedIcon />
			</Button>
			<Drawer
				anchor='left'
				open={showMobileMenu}
				onClose={toggleDrawer(false)}
			>
				{list()}
			</Drawer>
		</Box>
	);
}
