import React from 'react'
import './rightSection.css'
import Card from './Card'
const RightSection = () => {
  return (
    <div className='right__section'>
        <div className="right__section__wrapper">
            <div className="image__box">
                
            </div>
            <div className="card__wrapper">
                <div className="card__container">
                <Card heading='3.5' body='Years Experience'/>
                <Card heading='23' body='Project Challenge'/>
                <Card heading='830+' body='Posted Article'/>
                <Card heading='100k' body='Trusted Students'/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default RightSection