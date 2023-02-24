import {Form} from 'react-bootstrap';
import {useState} from 'react';
import {Button} from 'react-bootstrap';

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
					<Form.Control
						type='text'
						placeholder='Title'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
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
					<Form.Label>shortDescription</Form.Label>
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

				<Button variant='primary' onClick={handleSubmit}>
					{actionText}
				</Button>
			</Form>
		</>
	);
};

export default PostForm;
