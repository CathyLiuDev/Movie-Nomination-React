import React from 'react';
import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
import '../PopupInstructions.css';

/* from https://react-popup.elazizi.com/react-tooltip*/
 
const PopupInstructions = () => {
    return(
        <Popup
        trigger={<button className="btn btn-light"> how to </button>}
        modal
        nested
        >
        {close => (
        <div className="modal">
            <button className="close" onClick={close}>
            &times;
            </button>
            <div className="header"> Modal Title </div>
            <div className="content">
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
            Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
            delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
            </div>
            <div className="actions">
            <button
                className="button"
                onClick={() => {
                console.log('modal closed ');
                close();
                }}
            >
                close modal
            </button>
            </div>
        </div>
        )}
    </Popup>

  )
}



// <Popup
// trigger={<button className="button"> How to </button>}
// modal
// nested
// position='left center'
// >
// {close => (
//   <div className="modal">
//     <button className="close" onClick={close}>
//       &times;
//     </button>
//     <div className="header"> Modal Title </div>
//     <div className="content">
//       {' '}
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
//       Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
//       delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
//       <br />
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
//       commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
//       explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
//     </div>
//     <div className="actions">
//       <Popup
//         trigger={<button className="button"> Trigger </button>}
//         position="top center"
//         nested
//       >
//         <span>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
//           magni omnis delectus nemo, maxime molestiae dolorem numquam
//           mollitia, voluptate ea, accusamus excepturi deleniti ratione
//           sapiente! Laudantium, aperiam doloribus. Odit, aut.
//         </span>
//       </Popup>
//       <button
//         className="button"
//         onClick={() => {
//           console.log('modal closed ');
//           close();
//         }}
//       >
//         close modal
//       </button>
//     </div>
//   </div>
// )}
// </Popup>


export default PopupInstructions;










// const PopupInstructions = () => {
//     return(
//   <Popup trigger={<button className='button'> How to</button>} modal  position="left center">
//     <span>
//         <ul>
//             <li>Search for your nominations</li>
//             <li>Nominate</li>
//             <li>Review your nominees in the sidebar</li>
//             <li>And submit!</li>
//         </ul>
//     </span>
//   </Popup>
//   )
// }