import React from 'react'

export const ItemCard = ({ image, id, title, type }) => {
  return (
    <div className='card shadow col-12 col-sm-8 col-md-5 col-lg-3 col-xl-2 mx-2'>
        <img src={ image } alt="Gifs de Giphy Developers " className='card-img-top border' />
        <div className='card-body'>
            <h5 className='card-title text-uppercase' >{ title }</h5>
            <p className='card-text text-uppercase'>Este archivo es un <span className='fw-bold'>{ type }</span></p>
        </div>
    </div>
  )
}
