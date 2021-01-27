import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import RemoveFavourites from './RemoveFavourites';

const Sidebar = (props) => {
	return (
		<>
            <Menu>
                <h2> Your Nominations</h2>
                <br></br>
                {props.movies.map((movie, index) => (
                    //<div className='image-container d-flex justify-content-start '>
                    <div className='menu-item'>
                        <p><b>{index+1}. </b> {movie.Title}</p>
                        <div onClick={() => props.handleFavouritesClick(movie)}>
                            {/* <h5 class="card-title"> Remove Nomination </h5> */}
                            <RemoveFavourites/>
                            <hr/>
                        
                        </div>
                    </div>
                ))}
                <div className='menu-item'>
                    <br></br>
                    <br></br>
                    <button type='button' className='btn btn-success'>Nominate!</button>
                </div>
            </Menu>
		</>
	);
};

export default Sidebar;

