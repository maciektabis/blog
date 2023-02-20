import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {addPost} from '../../../redux/postsRedux';

const AddPostForm = () => {
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [publishedDate, setPublishedDate] = useState('');
	const [shortDescription, setShortDescription] = useState('');
	const [content, setContent] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate('/', {replace: true});

		dispatch(
			addPost({title, author, publishedDate, shortDescription, content})
		);
	};
	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Form.Group className='mb-3'>
					<Form.Label>Title</Form.Label>
					<Form.Control
						type='text'
						placeholder='Title'
						onChange={(e) => setTitle(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Label>Author</Form.Label>
					<Form.Control
						type='text'
						placeholder='Author'
						onChange={(e) => setAuthor(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Label>Published</Form.Label>
					<Form.Control
						type='text'
						placeholder='Published'
						onChange={(e) => setPublishedDate(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Label>shortDescription</Form.Label>
					<Form.Control
						type='text'
						placeholder='Leave a comment here'
						onChange={(e) => setShortDescription(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Label>Main content</Form.Label>
					<Form.Control
						type='text'
						placeholder='Leave a comment here'
						onChange={(e) => setContent(e.target.value)}
					/>
				</Form.Group>

				<Button
					variant='primary'
					onClick={handleSubmit}
				>
					Add post
				</Button>
			</Form>
		</>
	);
};
export default AddPostForm;
