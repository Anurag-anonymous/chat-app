import React from 'react'
import { Chatcards } from './chatcards'
import './universal.css'


export const sidebar = () => {
  return (
    <div className='sidebar'>
      <Chatcards/>
    </div>
  )
}

export default sidebar