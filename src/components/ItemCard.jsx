import React from 'react'

export const ItemCard = ({ image, id, title, type }) => {
  return (
    <div>
        <img src={ image } alt="Gifs de Giphy Developers" />
        <div >
            <h5 >{ title }</h5>
            <p >El tipo de archivo es: <span>{ type }</span></p>
        </div>
    </div>
  )
}
