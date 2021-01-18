import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourite';
import RemoveFavourites from './components/RemoveFavourites';
import Header from './components/Header';
import StickyHeader from './components/StickyHeader';
// import ControlledLottie from './components/ControlledLottie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [favourites, setFavourites] = useState([]);

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	const addFavouriteMovie = (movie) => {
		console.log(favourites);
		const newFavouriteList = [...favourites, movie];
		if (favourites.includes(movie)){
			alert('dupe');
		}
		else if (newFavouriteList.length <= 5){
			setFavourites(newFavouriteList);
		}
		else {
			alert('5 movies');
		}
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	return (
		<div>
			<Sidebar 
				pageWrapId={'page-wrap'}
				outerContainerId={'outer-container'}
				movies={favourites} 
				favouriteComponent={RemoveFavourites}
				handleFavouritesClick={removeFavouriteMovie}
				/>
			
			<div className='container-fluid sticky-top'>				
				<StickyHeader/>
				<Header></Header>
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			{/* <ControlledLottie/> */}
			<div className='container-fluid movie-app'>
				<div className='row d-flex align-items-center mt-4 mb-4'>
					<MovieListHeading heading='Nominate your favourite movies' />
					
				</div>
				<div className='FLEX'>
					<MovieList
						movies={movies}
						favouriteComponent={AddFavourites}
						handleFavouritesClick={addFavouriteMovie}
					/>
				</div>
				{/* <div className='row d-flex align-items-center mt-4 mb-4'>
					<MovieListHeading heading='Favourites' />
				</div>
				<div className='row'>
					<MovieList
						movies={favourites}
						handleFavouritesClick={removeFavouriteMovie}
						favouriteComponent={RemoveFavourites}
					/>
				</div> */}
			</div>
		</div>
	);
};

export default App;
