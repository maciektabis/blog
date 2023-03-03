import {Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
	return (
		<Navbar
			bg='primary'
			variant='dark'
			className='mt-4 mb-4 rounded justify-content-between p-2'
		>
			<Navbar.Brand href='#home'>Blog.app</Navbar.Brand>
			<Nav className='flex-sm-column flex-md-row'>
				<Nav.Link as={NavLink} to='/'>
					Home
				</Nav.Link>
				<Nav.Link as={NavLink} to='/about'>
					About
				</Nav.Link>
				<Nav.Link as={NavLink} to='/categories'>
					Categories
				</Nav.Link>
			</Nav>
		</Navbar>
	);
};

export default NavBar;
