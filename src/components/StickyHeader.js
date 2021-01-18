// Import the base CSS, if you're using webpack just import them straight.
// Else import them into your base CSS.
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

const StickyHeaderLogo = () => {
  return (
      <>
    {/* // This is the sticky part of the header. */}
    {/* header={ */}
      <div className="Header_root">
        <h1 className="Header_title">ReactStickyHeader</h1>

        <ul className="Header_links">
          <li className="Header_link">When</li>
          <li className="Header_link">Why</li>
          <li className="Header_link">About</li>
        </ul>
      </div>
    {/* }; */}
    </>
    );
};

export default StickyHeader;

// const SearchBox = (props) => {
// 	return (
// 		<div className='col'>
// 			<input
// 				className='form-control'
// 				value={props.value}
// 				onChange={(event) => props.setSearchValue(event.target.value)}
// 				placeholder='Type to search...'
// 			></input>
// 		</div>
// 	);
// };

// export default SearchBox;