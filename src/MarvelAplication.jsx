import React, { useEffect, useState } from 'react'
import { Card } from './components/Card'
import { getNewImages } from './helpers/getNewImages'

export const MarvelAplication = () => {

    const [pagina, setPagina] = useState(0)
    const { imagenes, isLoading } = getNewImages( pagina )

    const handleNextPage = () => {
        setPagina( pagina => pagina + 1 )
    }

    const handleBackPage = () => {
        if ( pagina === 0 ) return
        setPagina( pagina => pagina - 1 )
    }

  return (
    <div>
            <h1>Marvel API</h1>
            <div>
                <Card 
                    imagenes={ imagenes }
                    isLoading={ isLoading } />
            </div>
            <div>
                <button
                    disabled={ isLoading || pagina === 0 }
                    onClick={ handleBackPage }>
                    Anterior
                </button>
                <button
                    disabled={ isLoading }
                    onClick={ handleNextPage }>
                    Siguiente
                </button>
            </div>
    </div>
  )
}
