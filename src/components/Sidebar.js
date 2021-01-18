// import React from 'react';
// import { slide as Menu } from 'react-burger-menu';

// export default props => {
//   return (
//     <Menu>
//       <a className="menu-item" href="/">
//         Home
//       </a>
//       <a className="menu-item" href="/salads">
//         Salads
//       </a>
//       <a className="menu-item" href="/pizzas">
//         Pizzas
//       </a>
//       <a className="menu-item" href="/desserts">
//         Desserts
//       </a>
//     </Menu>
//   );
// };

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


// CHANGING CARD
{/* <div className='card' onClick={() => props.handleFavouritesClick(movie)}>
<div className='card-body'>
    <h5 className='card-title'>{movie.title}</h5>
<RemoveFavourites/>
</div>

// const Sidebar = (props) => { */}

// 	return (
// 		<>
//             <Menu>
//                 {props.movies.map((movie, index) => (
//                     //<div className='image-container d-flex justify-content-start '>
//                     <div className='menu-item'>
//                         <div className='card' onClick={() => props.handleFavouritesClick(movie)}>
//                             <div className='card-body'></div>
//                             <div className='card-title'> {movie.Title} </div>
//                             <div class="card-text"> Remove Nomination </div>
                        
//                         </div>
//                     </div>
//                 ))}
//             </Menu>
// 		</>
// 	);
// };

// export default Sidebar;


// import React from 'react';

// const MovieList = (props) => {
// 	const FavouriteComponent = props.favouriteComponent;

// 	return (
// 		<>
// 			{props.movies.map((movie, index) => (
// 				//<div className='image-container d-flex justify-content-start '>
// 				<div className='menu-item '>
// 					<h1>{movie.Title}</h1>
// 					<div
// 						onClick={() => props.handleFavouritesClick(movie)}
// 						className='overlay d-flex align-items-center justify-content-center'
// 					>
// 						<FavouriteComponent />
// 					</div>
// 				</div>
// 			))}
// 		</>
// 	);
// };

// export default MovieList;

// import React from 'react';

// const RemoveFavourites = () => {
// 	return (
// 		<>
// 			<span className='mr-2'>Remove from favourites</span>
// 			<svg
// 				width='1em'
// 				height='1em'
// 				viewBox='0 0 16 16'
// 				class='bi bi-x-square'
// 				fill='currentColor'
// 				xmlns='http://www.w3.org/2000/svg'
// 			>
// 				<path
// 					fill-rule='evenodd'
// 					d='M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z'
// 				/>
// 				<path
// 					fill-rule='evenodd'
// 					d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'
// 				/>
// 			</svg>
// 		</>
// 	);
// };

// export default RemoveFavourites;