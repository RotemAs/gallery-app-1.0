import React from 'react';

//Create a function that renders a message if what was in the input doesn't exist
const NoPhotos = props => (
    <div className='main-content not-found'>
 <li className='no-gifs'>
     <h3>Sorry, no photos match your search</h3>

 </li>
</div>
)

export default NoPhotos;