export const dateToStr = (publishedDate) => {
	console.log('beforechange', publishedDate);
	console.log(publishedDate.toLocaleDateString('en-US'));
	return publishedDate.toLocaleDateString('en-US');
};
