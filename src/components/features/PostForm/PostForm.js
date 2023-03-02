import {Form} from 'react-bootstrap';
import {useState} from 'react';
import {Button} from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PostForm = ({action, actionText, ...props}) => {
	const [title, setTitle] = useState(props.title || '');
	const [author, setAuthor] = useState(props.author || '');
	const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
	const [shortDescription, setShortDescription] = useState(
		props.shortDescription || ''
	);
	const [content, setContent] = useState(props.content || '');

	const handleSubmit = (e) => {
		e.preventDefault();
		action({title, author, publishedDate, shortDescription, content});
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Form.Group className='mb-3'>
					<Form.Label>Title</Form.Label>
					<DatePicker
						selected={publishedDate}
						onChange={(date) => setPublishedDate(date)}
					/>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Label>Author</Form.Label>
					<Form.Control
						type='text'
						placeholder='Author'
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Label>Published</Form.Label>
					<Form.Control
						type='text'
						placeholder='Published'
						value={publishedDate}
						onChange={(e) => setPublishedDate(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Label>Short Description</Form.Label>

					<Form.Control
						type='text'
						placeholder='Leave a comment here'
						value={shortDescription}
						onChange={(e) => setShortDescription(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Label>Main content</Form.Label>
					<Form.Control
						type='text'
						placeholder='Leave a comment here'
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
				</Form.Group>
				<ReactQuill value={content} onChange={setContent} />

				<Button variant='primary' onClick={handleSubmit}>
					{actionText}
				</Button>
			</Form>
		</>
	);
};

export default PostForm;
