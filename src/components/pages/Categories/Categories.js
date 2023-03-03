import React, {useState} from 'react';
import {getAllCategories} from '../../../redux/categoriesRedux';
import {useSelector} from 'react-redux';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Categories = () => {
	const categoriesList = useSelector(getAllCategories);
	return (
		<section>
			<h1 className='mb-5 justify-content-center d-flex'>Categories</h1>
			<Card>
				{categoriesList.map((category) => (
					<Link to={'/categories/' + category} className='text-decoration-none'>
						{category}
					</Link>
				))}
			</Card>
		</section>
	);
};
export default Categories;
