import {Form} from 'react-bootstrap';
import {useState} from 'react';
import {Button} from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useForm} from 'react-hook-form';

const PostForm = ({action, actionText, ...props}) => {
	const [title, setTitle] = useState(props.title || '');
	const [author, setAuthor] = useState(props.author || '');
	const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
	const [shortDescription, setShortDescription] = useState(
		props.shortDescription || ''
	);
	const [category, setCategory] = useState(props.category || '');

	const [content, setContent] = useState(props.content || '');

	const {
		register,
		handleSubmit: validate,
		formState: {errors},
	} = useForm();
	const [contentError, setContentError] = useState(false);
	const [dateError, setDateError] = useState(false);
	const handleSubmit = () => {
		setContentError(!content);
		setDateError(!publishedDate);
		if (content && publishedDate) {
			action({
				title,
				author,
				publishedDate,
				shortDescription,
				content,
				category,
			});
		}
	};

	return (
		<>
			<Form onSubmit={validate(handleSubmit)}>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Title</Form.Label>
					<Form.Control
						{...register('title', {required: true, minLength: 3})}
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						type='text'
						placeholder='Enter title'
					/>
					{errors.title && (
						<small className='d-block form-text text-danger mt-2'>
							Title is too short (min is 3)
						</small>
					)}
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Label>Author</Form.Label>
					<Form.Control
						{...register('author', {required: true, minLength: 3})}
						value={author}
						type='text'
						placeholder='Author'
						onChange={(e) => setAuthor(e.target.value)}
					/>
					{errors.author && (
						<small className='d-block form-text text-danger mt-2'>
							Author is too short (min is 3)
						</small>
					)}
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Label>Published</Form.Label>
					<DatePicker
						selected={publishedDate}
						onChange={(date) => setPublishedDate(date)}
						dateFormat='yyyy/MM/dd'
					/>
					{dateError && (
						<small className='d-block form-text text-danger mt-2'>
							Date can't be empty
						</small>
					)}
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Label>Category</Form.Label>
					<Form.Select
						value={category}
						onChange={(e: any) => setCategory(e.currentTarget.value)}
					>
						<option value='Movies'>Movies</option>
						<option value='News'>News</option>
						<option value='Sport'>Sport</option>
					</Form.Select>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Label>Short Description</Form.Label>
					<Form.Control
						{...register('shortDescription', {required: true, minLength: 20})}
						type='text'
						placeholder='Leave a comment here'
						value={shortDescription}
						onChange={(e) => setShortDescription(e.target.value)}
					/>
					{errors.shortDescription && (
						<small className='d-block form-text text-danger mt-2'>
							Description is too short (min is 20)
						</small>
					)}
				</Form.Group>

				<ReactQuill value={content} onChange={setContent} />
				{contentError && (
					<small className='d-block form-text text-danger mt-2'>
						Content can't be empty
					</small>
				)}

				<Button variant='primary' onClick={handleSubmit}>
					{actionText}
				</Button>
			</Form>
		</>
	);
};
export default PostForm;
