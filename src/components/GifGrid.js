import React from 'react'
import GifGridItem from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export default function GifGrid ({category}) {
  const { data, loading } = useFetchGifs( category )

  return (
    <>
    { loading && <p>Loading ...</p> }
    <h3> { category } </h3>
    <div className="card-grid">
      { data.map( img => (
        <GifGridItem
          key={img.id}
          id={img.id}
          title={img.title}
          url={img.url}
        />
      ))}
    </div>
    </>
  )
}
