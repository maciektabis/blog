import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getPostById} from '../../../redux/postsRedux';
import {Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {removePost} from '../../../redux/postsRedux';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {Modal} from 'react-bootstrap';
import {Navigate} from 'react-router-dom';
const SinglePost = (props) => {
	const {id} = useParams();
	const postsData = useSelector((state) => getPostById(state, id));
	const dispatch = useDispatch();
	const deletePost = (e) => {
		e.preventDefault();
		dispatch(removePost(id));
	};
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	if (!postsData) return <Navigate to='/' />;
	else;
	return (
		<div className='col-md-8'>
			<header className='d-flex justify-content-between mt-2 mb-2 p-2'>
				<h2>{postsData.title}</h2>
				<div>
					<Link key={props.id} to={'/post/edit/' + props.id}>
						<Button variant='btn btn-outline-primary m-1'>Edit</Button>
					</Link>
					<Button variant='btn btn-outline-danger m-1' onClick={handleShow}>
						Delete
					</Button>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Are you sure?</Modal.Title>
						</Modal.Header>
						<Modal.Body>This will delete your post!</Modal.Body>
						<Modal.Footer>
							<Button variant='secondary' onClick={handleClose}>
								Cancel
							</Button>
							<Button variant='danger' onClick={deletePost}>
								Remove
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</header>
			<p>Author: {postsData.author}</p>
			<p>Published: {postsData.publishedDate}</p>
			<p>{postsData.shortDescription}</p>
		</div>
	);
};
export default SinglePost;
