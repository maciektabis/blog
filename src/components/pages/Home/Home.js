import React from 'react';
import PostTable from '../../features/PostTable/PostTable';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const Home = () => {
	return (
		<main>
			<div className='d-flex justify-content-between'>
				<h1>All Posts</h1>
				<Link to='/post/add'>
					<Button variant='outline-info'>Add post</Button>
				</Link>
			</div>
			<PostTable />
		</main>
	);
};

export default Home;
