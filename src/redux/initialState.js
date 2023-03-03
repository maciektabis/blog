const initialState = {
	posts: [
		{
			id: '1',
			title: 'Article title',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date('02-02-2022'),
			author: 'Lebron James',
			category: 'Sport',
		},
		{
			id: '2',
			title: 'Article title',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date('14-01-2023'),
			author: 'Khal Drogo',
			category: 'Movies',
		},
		{
			id: '3',
			title: 'Article title',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date('02-02-2022'),
			author: 'Michael Scott',
			category: 'Movies',
		},
		{
			id: '4',
			title: 'Article title 4',
			shortDescription: 'Short description of the article...',
			content: 'Main content of the article',
			publishedDate: new Date('02-02-2022'),
			author: 'Dwight Schrute',
			category: 'Movies',
		},
	],
	categories: ['Movie', 'Sport'],
};

export default initialState;
