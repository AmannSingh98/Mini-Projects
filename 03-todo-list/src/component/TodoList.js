import React, { useState } from 'react'
import './TodoList.css'

const TodoList = () => {
  const [itemName, setItemName] = useState('')
  const [list, setList] = useState([])

  const handleChange = (e) => {
    setItemName(e.target.value)
  }

  const handleAddItem = () => {
    if (!itemName) {
      alert('Name Is empty')
      return
    }
    setList([...list, itemName])
    setItemName('')
  }

  return (
    <div className="primaryContainer">
      <div>
        <input
          type="text"
          className="inputContainer"
          value={itemName}
          onChange={handleChange}
        />
        <button type="text" className="addButton" onClick={handleAddItem}>
          Add Item
        </button>
      </div>
      <div className="todoContainer">
        <h1 className="title">TODO</h1>
        <hr />
        {list.map((item, index) => {
          return (
            <h3 className="itemName" key={index}>
              {index + 1}. {item}
            </h3>
          )
        })}
      </div>
    </div>
  )
}

export default TodoList
