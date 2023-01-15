import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../store/movieSlice';

function HomePageMovies({ data, title }) {
	const dispatch = useDispatch();

	return (
		<>
			<div className='movie-row-container'>
				<h2>{title}</h2>
				<div className='movie_container'>
					{data.map((el, index) => {
						if (index < 6) {
							return (
								<div
									key={index}
									className='movie_cart'
									onClick={() => {
										dispatch(
											toggleModal({
												hover: true,
												image: el.poster_path,
												title: el.title,
												text: el.overview,
												part: title,
											})
										);
									}}>
									<img
										src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
										alt='image'
									/>
								</div>
							);
						}
					})}
				</div>
			</div>
		</>
	);
}

export default HomePageMovies;
