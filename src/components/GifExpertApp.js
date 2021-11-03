import React, { useState } from 'react'
import AddCategory from './AddCategory'

export default function GifExpertApp () {
  // const categories = ['Samurai', 'One Punch', 'Samurai X', 'Dragon Ball']
  const [categories, setCategories] = useState(['Samurai X', 'One Punch'])

  // const handleAdd = () => {
  //   setcategories([...categories, new])
  // }

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory
        categories={categories}
        setCategories={setCategories}/>
      <hr/>

        <ol>
          { categories.map((category) => {
            return <li
            key={category}>
            {category}
            </li>
          })}
        </ol>
    </div>
  )
}
