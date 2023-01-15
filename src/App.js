import { useEffect, useState } from 'react';
import Utils from './utils/Utils';
import { movies_Data } from './store/movieSlice';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Popular from './pages/Popular';
import Now_Playing from './pages/Now_Playing';
import Top_Rated from './pages/Top_Rated';
import Upcoming from './pages/Upcoming';

const movies_selection = [
	'popular',
	'top_rated',
	'upcoming',
	'now_playing',
];
function App() {
	const dispatch = useDispatch();

	let recievedData = {
		popular: [],
		top_rated: [],
		upcoming: [],
		now_playing: [],
	};
	useEffect(() => {
		movies_selection.forEach((el) => {
			Utils.getMovisAPI(el).then((data) => {
				recievedData[el] = data.results;
				dispatch(movies_Data(recievedData));
			});
		});
	});

	return (
		<div className='App'>
			<Navbar />

			<Routes>
				<Route path={'/'} element={<Home />} />
				<Route path={'/popular'} element={<Popular />} />
				<Route path={'/now_playing'} element={<Now_Playing />} />
				<Route path={'/top_rated'} element={<Top_Rated />} />
				<Route path={'/upcoming'} element={<Upcoming />} />
			</Routes>
		</div>
	);
}

export default App;
