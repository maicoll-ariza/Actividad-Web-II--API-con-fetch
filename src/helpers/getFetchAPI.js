export const getFetchAPI = async ( pagina = 0 ) => {


    const url = `https://api.giphy.com/v1/gifs/search?api_key=lB7AZAeUH2C5Aj5PgdNSgHNXqeMHEguC&q=anime&limit=10&offset=${ pagina }0`

    const resultado = await fetch( url )
    const { data } = await resultado.json()
    console.log(data);

    const newImages = data.map( dato => ({
        id: dato.id,
        title: dato.title,
        type: dato.type,
        image: dato.images.downsized_medium.url
    }))


    return newImages
     
}
