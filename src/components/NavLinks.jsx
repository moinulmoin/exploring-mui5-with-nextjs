import { Button } from '@mui/material';
import { Box } from '@mui/system';
import MuiNextLink from '../utils/MuiNextLink';

const NavLinks = ({ navLinks }) => {
	return (
		<Box sx={{ display: { xs: 'none', md: 'block' } }}>
			{navLinks.map((link, index) => {
				return (
					<MuiNextLink href={link.path} key={`${link.title + index}`}>
						<Button
							sx={{
								color: 'white',
							}}
						>
							{link.title}
						</Button>
					</MuiNextLink>
				);
			})}
		</Box>
	);
};

export default NavLinks;
