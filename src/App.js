import './App.css';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import {Routes, Route} from 'react-router-dom';
import SinglePost from './components/pages/SinglePost/SinglePost';
import {Container} from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import AddPostForm from './components/features/AddPostForm/AddPostForm';
import EditPostForm from './components/features/EditPostForm/EditPostForm';

function App() {
	return (
		<main>
			<Container>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/post/:id' element={<SinglePost />} />
					<Route path='/post/add' element={<AddPostForm/>} />
					<Route path='/post/edit/:id' element={<EditPostForm/>} />
					<Route path='/about' element={<About />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</Container>
		</main>
	);
}
export default App;
