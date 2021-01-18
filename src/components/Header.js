import React from 'react';
import logo from './Shoppies_Logo2.png';
import PopupInstructions from './PopupInstructions';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Header = () => {
	return (
		<>
        {/* <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/> */}
<div class="ht-header sticky-top">
	<br></br>
	<div class="container">
		<nav class="navbar navbar-default navbar-custom">
				<div class="navbar-header logo">
				    <a href="index-2.html"><img class="logo" src={logo} alt="" width="200" height="60"></img></a>
			    </div>
				<div><PopupInstructions/></div>	
				{/* <div class="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1"></div>
                <ul class="nav navbar-nav flex-child-menu menu-right">
                <li class="btn signupLink"><a href="#">sign up</a></li>
					</ul> */}
				</nav>
        {/* <div class="top-search">
	    	<select>
				<option value="united">TV show</option>
				<option value="saab">Others</option>
			</select>
			<input type="text" placeholder="Search for a movie, TV Show or celebrity that you are looking for"></input> */}
	    {/* </div> */}

	</div>
</div>
		</>
	);
};

export default Header;


