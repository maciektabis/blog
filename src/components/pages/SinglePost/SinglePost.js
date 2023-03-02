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
import {dateToStr} from '../../../utils/dateToStr';

const SinglePost = () => {
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
					<Link key={postsData.id} to={'/post/edit/' + postsData.id}>
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
			<p>Published: {dateToStr(postsData.publishedDate)}</p>
			<p dangerouslySetInnerHTML={{__html: postsData.content}} />
		</div>
	);
};
export default SinglePost;
