import './App.css';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import PostEdit from './components/pages/PostEdit/PostEdit';
import PostAdd from './components/pages/PostAdd/PostAdd';
import {Routes, Route} from 'react-router-dom';
import SinglePost from './components/pages/SinglePost/SinglePost';
import {Container} from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';

function App() {
	return (
		<main>
			<Container>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/post/:id' element={<SinglePost />} />
					<Route path='/post/add' element={<PostAdd />} />
					<Route path='/post/edit/:id' element={<PostEdit />} />
					<Route path='/about' element={<About />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</Container>
		</main>
	);
}
export default App;
