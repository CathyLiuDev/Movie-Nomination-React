import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	


	return (
		<>
			{props.movies.map((movie, index) => (
				//<div className='image-container d-flex justify-content-start '>
				<div className='image-container d-flex justify-content-start '>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<p>Title: {movie.Title}</p>
						<p>Release Year: {movie.Year}</p>
						<FavouriteComponent id={index}/>
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
