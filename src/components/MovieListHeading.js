import React from 'react';

const MovieListHeading = (props) => {
	return (
		<div className='col-sm-6 ml-5'>
			<h1 className='display-4'>{props.heading}</h1>
		</div>
	);
};

export default MovieListHeading;
