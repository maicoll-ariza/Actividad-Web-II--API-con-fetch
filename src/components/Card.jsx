import React from 'react'
import { ItemCard } from './ItemCard'

export const Card = ({ imagenes, isLoading }) => {

    if ( isLoading ) {
        return ( <h4>Cargando...</h4> )
    }

  return (
    <div>
        <h3>Tus gifs e imagenes favoritas aquí</h3>
        {
            imagenes.map( imagen => (
                <ItemCard key={ imagen.id } { ...imagen } />
            ))
        }
    </div>
  )
}


//lB7AZAeUH2C5Aj5PgdNSgHNXqeMHEguC