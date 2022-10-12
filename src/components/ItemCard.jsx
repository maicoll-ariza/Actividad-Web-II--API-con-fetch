import React from 'react'

export const ItemCard = ({ image, id, title, type }) => {
  return (
    <div className='card shadow'>
        <img src={ image } alt="Gifs de Giphy Developers" className='card-img-top img-fluid' />
        <div className='card-body'>
            <h5 className='card-title' >{ title }</h5>
            <p className='card-text text-uppercase'>Este archivo es un <span className='fw-bold'>{ type }</span></p>
        </div>
    </div>
  )
}
