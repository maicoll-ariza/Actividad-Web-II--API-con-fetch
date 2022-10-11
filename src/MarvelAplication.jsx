import React from 'react'
import { Card } from './components/Card'

export const MarvelAplication = () => {
  return (
    <div>
            <h1>Marvel API</h1>
            <div>
                <Card />
            </div>
            <div>
                <button>
                    Anterior
                </button>
                <button>
                    Siguiente
                </button>
            </div>
    </div>
  )
}
