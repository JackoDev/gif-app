import React, { useState } from 'react'
import AddCategory from './AddCategory'
import GifGrid from './GifGrid'

export default function GifExpertApp () {
  const [categories, setCategories] = useState(['Samurai X'])

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory
        categories={categories}
        setCategories={setCategories}/>
      <hr/>

        <ol>
          { categories.map( category => (
            <GifGrid 
            key={category}
            category={category}
            />
          ))
          }
        </ol>
    </div>
  )
}
