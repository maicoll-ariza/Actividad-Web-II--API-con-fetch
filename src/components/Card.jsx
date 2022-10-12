import React from 'react'
import { ItemCard } from './ItemCard'

export const Card = ({ imagenes, isLoading }) => {

    if ( isLoading ) {
        return ( <h4>Cargando...</h4> )
    }

  return (
    <div className='d-flex flex-column align-items-center'>
        
        <div className='d-flex justify-content-evenly flex-wrap gap-3 mx-4'>
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