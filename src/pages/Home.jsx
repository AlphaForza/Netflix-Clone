import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
// import Now_Playing from "../components/Now_Playing";
import HomePageMovies from '../components/HomePageMovies';
import { toggleModal } from '../store/movieSlice';

function Home() {
	const { popular, upcoming, top_rated, now_playing } = useSelector(
		(state) => state.movieData
	);

	const { modalCard } = useSelector((state) => state.movieData);
	const dispatch = useDispatch();

	return (
		<div className='home_page'>
			<div className='home-page-landingImage'></div>
			<div className='cardToggle'>
				{popular.length > 0 && (
					<HomePageMovies data={popular} title={'Popular'} />
				)}
				{popular.length > 0 && (
					<HomePageMovies data={upcoming} title={'Upcoming'} />
				)}
				{popular.length > 0 && (
					<HomePageMovies data={top_rated} title={'TopRated'} />
				)}
				{popular.length > 0 && (
					<HomePageMovies data={now_playing} title={'Now Playing'} />
				)}

				{/* modal */}
				{modalCard.hover && (
					<div
						className={`modal ${modalCard.part
							.replace(/ /g, '')
							.toLowerCase()}`}>
						<span
							onClick={() => {
								dispatch(toggleModal({ hover: false }));
							}}>
							X
						</span>
						<div className='modal-image'>
							<img
								src={`https://image.tmdb.org/t/p/w200${modalCard.image}`}
								alt='image'
							/>
						</div>

						<div className='modal-content'>
							<h2 className='title'>{modalCard.title}</h2>
							<p className='text'>{modalCard.text}</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Home;
