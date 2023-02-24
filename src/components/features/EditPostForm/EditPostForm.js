import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import PostForm from '../PostForm/PostForm';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {editPost, getPostById} from '../../../redux/postsRedux';

const EditPostForm = () => {
	const {id} = useParams();
	const editPostsData = useSelector((state) => getPostById(state, id));

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (post) => {
		dispatch(editPost({...post, id}));

		navigate('/');
	};

	return (
		<PostForm
			action={handleSubmit}
			actionText={'Edit post'}
			author={editPostsData.author}
			publishedDate={editPostsData.publishedDate}
			shortDescription={editPostsData.shortDescription}
			title={editPostsData.title}
			content={editPostsData.content}
		/>
	);
};
export default EditPostForm;
