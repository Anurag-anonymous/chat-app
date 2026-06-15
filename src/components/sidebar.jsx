import React from 'react'
import { Chatcards } from './chatcards'
import './universal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faDoorClosed } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';



export const sidebar = () => {

  const [search, setSearch] = React.useState('');
  return (
    <div className='sidebar'>
      <div className='options'>
        <button className='chat-btn'>        <FontAwesomeIcon icon={faComment} style={{padding:'0 3px 0 0'}} />
Chats</button>
   <button className='chat-btn'>       <FontAwesomeIcon icon={faDoorClosed}  style={{padding:'0 3px 0 0'}} />
Rooms</button>
   <button className='chat-btn'>        <FontAwesomeIcon icon={faGear}  style={{padding:'0 3px 0 0'}} />
Settings</button>
   <button className='chat-btn'>        <FontAwesomeIcon icon={faArrowRightFromBracket}  style={{padding:'0 3px 0 0'}} />
Logout</button>
      </div>
      <div className='chatside '>
        <div className='chatside-header '>
          <button className='chatsedit-btn'>Edit</button>
          <input
        type="text"
        
        placeholder="Search rooms..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='search-input'
      />
        </div>

      <Chatcards/>

      </div>
    </div>
  )
}

export default sidebar