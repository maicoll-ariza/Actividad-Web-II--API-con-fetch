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
    <div className='col-12 py-3'>
            <h1 className='text-center fw-bold  text-uppercase'>Marvel API</h1>
            <div>
                <Card 
                    imagenes={ imagenes }
                    isLoading={ isLoading } />
            </div>
            <div className='d-flex justify-content-center gap-5 my-3'>
                <button
                    className='btn btn-outline-primary'
                    disabled={ isLoading || pagina === 0 }
                    onClick={ handleBackPage }>
                    Anterior
                </button>
                <button
                    className='btn btn-outline-primary'
                    disabled={ isLoading }
                    onClick={ handleNextPage }>
                    Siguiente
                </button>
            </div>
    </div>
  )
}
