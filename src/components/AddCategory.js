import React, { useState} from 'react'


export default function AddCategory ({ categories, setCategories }) {

  const [inputValue, setinputValue] = useState('')
  const handleInputChange = (e) => {
    setinputValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2 ) {
      setCategories([...categories, inputValue])
      setinputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingresa una nueva Categoría"
        value={inputValue}
        onChange={handleInputChange}
        />
    </form>
  )
}
