import React from 'react';

const MovieListHeading = (props) => {
	return (
		<div className='col-sm-6 ml-5'>
			<h1 className='display-4'>{props.heading}</h1>
			{/* <ul>
				<li>Search for your nominations</li>
				<li>Nominate</li>
				<li>Review your nominees in the sidebar</li>
				<li>And submit!</li>
			</ul> */}
		</div>
	);
};

export default MovieListHeading;
