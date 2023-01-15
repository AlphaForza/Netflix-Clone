import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<div className='navbar'>
			<div className='navbar-list'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
					alt=''
				/>

				<ul className='navbar-list'>
					<li className='navbar-item'>
						<NavLink to={'/'}>Home</NavLink>
					</li>
					<li className='navbar-item'>
						<NavLink to={'/popular'}>Popular</NavLink>
					</li>
					<li className='navbar-item'>
						<NavLink to={'now_playing'}>Now Playing</NavLink>
					</li>
					<li className='navbar-item'>
						<NavLink to={'/top_rated'}>Top rated</NavLink>
					</li>
					<li className='navbar-item'>
						<NavLink to={'/upcoming'}>Upcoming</NavLink>
					</li>
				</ul>
			</div>
			<div className='navbar-icons'>
				<input type='text' placeholder='search' />
			</div>
		</div>
	);
}

export default Navbar;
