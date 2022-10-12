import React from 'react'
import { ItemCard } from './ItemCard'

export const Card = ({ imagenes, isLoading }) => {

    if ( isLoading ) {
        return ( <h4>Cargando...</h4> )
    }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <h3 className='fw-light text-uppercase'>Tus gifs e imagenes favoritas aquí</h3>
        <div className='d-flex justify-content-around flex-wrap gap-3'>
            {
            imagenes.map( imagen => (
                <ItemCard key={ imagen.id } { ...imagen } />
                ))
            }
        </div>
    </div>
  )
}


//lB7AZAeUH2C5Aj5PgdNSgHNXqeMHEguC