import React from 'react';
import ControlledLottie from './ControlledLottie';


const AddFavourite = () => {
	
	return (
		<>
			<span className='row' >
				<h2 className='col display-4'>Nominate</h2>
				
				<div className='col'><ControlledLottie/></div>
			</span>
		</>
	);
};

export default AddFavourite;