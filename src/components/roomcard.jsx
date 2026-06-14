import React from 'react'
import './universal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';



export const Roomcard = () => {
  return (
    <div className='roomcard'>
      <img src="src\assets\profile.jpg" alt="" />
      <div className='info'>
        
        <h4 className='roomname'>Room Name</h4>
        <p className='roompreview'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
      </div>
<FontAwesomeIcon icon={faCircle} style={{ fontSize: "0.7em" }} />
    </div>
  )
}
