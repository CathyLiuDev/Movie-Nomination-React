import React from 'react';

const SearchBox = (props) => {
	return (
		<div className='col'>
			<input
				className='form-control sticky-top'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Search for movies...'
			></input>
		</div>
	);
};

export default SearchBox;