import {useParams} from 'react-router-dom';
import {Row} from 'react-bootstrap';

import {getAllPosts} from '../../../redux/postsRedux';
import {useSelector} from 'react-redux';
import Post from '../Posts/Posts';
import {getPostByCategory} from '../../../redux/postsRedux';

const CategoryTable = () => {
	const {category} = useParams();

	const posts = useSelector((state) => getPostByCategory(state, category));
	console.log(posts);

	return (
		<section>
			<Row>
				{' '}
				{posts.map((post) => (
					<Post
						key={post.id}
						title={post.title}
						description={post.shortDescription}
						content={post.content}
						date={post.publishedDate}
						category={post.category}
						author={post.author}
						id={post.id}
					/>
				))}
			</Row>
		</section>
	);
};
export default CategoryTable;
