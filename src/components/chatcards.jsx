import React from 'react'
import { Roomcard } from './roomcard'
import './universal.css'


export const Chatcards = () => {
  return (
    <div className='chatcards'>
      <h3 className='chatcards-header' style={{margin:'4px 0',display:'flex',fontSize:'1.5em', color:"white"

      }}>Chats</h3>
        <Roomcard/>
    </div>
  )
}
