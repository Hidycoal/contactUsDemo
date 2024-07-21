import React from 'react'
import './card.css'
const Card = ({heading, body}) => {
  return (
    <div className='card'>
        <p className='heading'>{heading}</p>
        <p className='body'>{body}</p>
    </div>
  )
}

export default Card