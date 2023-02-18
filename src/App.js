import './App.css';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import PostEdit from './components/pages/PostEdit/PostEdit';
import PostAdd from './components/pages/PostAdd/PostAdd';
import {Routes, Route} from 'react-router-dom';
import SinglePost from './components/pages/SinglePost/SinglePost';

function App() {
	return (
		<main>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/singlepost' element={<SinglePost />} />
				<Route path='/postadd' element={<PostAdd />} />
				<Route path='/postedit' element={<PostEdit />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</main>
	);
}
export default App;
