import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const Posts = (props) => {
	return (
		<div className='py-3 col-6 col-md-4'>
			<div className='card'>
				<div className='card-body'>
					<h5 className='card-title'>{props.title}</h5>
					<p className='font-weight-bold'>Author: {props.author}</p>
					<p className='text-muted'>Published: {props.date}</p>
					<p className='card-text'> Short description: {props.description}.</p>
					<Link key={props.id} to={'/post/' + props.id}>
						<Button variant='primary'>Read more</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Posts;
