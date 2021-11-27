import { useState, useEffect } from "react"
import { getGifs } from "../utils/getGifs"

export const useFetchGifs = ( category ) => {

  const [state, setState] = useState({
    data: [],
    loading: true

  })

  useEffect(() => {
    getGifs(category)
    .then(imgs => {

      setTimeout(
      setState({
        data: imgs,
        loading: false
      }), 14500)
    })
  }, [category])

  return state
}
