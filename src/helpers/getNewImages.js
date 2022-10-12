import { useEffect, useState } from "react"
import { getFetchAPI } from "./getFetchAPI"

export const getNewImages =  ( pagina ) => {
    
    const [imagenes, setImagenes] = useState([])
    const [isLoading, setIsLoading] = useState( false )

   const conseguirImagenes = async () => {
        setIsLoading( true )
        const newImages = await getFetchAPI( pagina )
        setImagenes( newImages )
        setIsLoading( false )
   }

   useEffect(() => {
        conseguirImagenes()
   }, [ pagina ])

   return {
    isLoading, 
    imagenes
   }
}
