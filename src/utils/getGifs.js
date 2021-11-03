
export const getGifs = async( category ) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=zWe79lFgBvqbp5haKNgyPyUAxoKmjx17&q=${ encodeURI(category) }&limit=10`
  const resp = await fetch(url)
  const { data } = await resp.json()

  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      image: img.images?.downsized_large,
      url: img.images?.downsized_large?.url
    }
  })

  return gifs
}