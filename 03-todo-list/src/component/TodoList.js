import React, { useState } from 'react'
import './TodoList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

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

  const handleDelete = (itemName) => {
    const newList = list.filter((item) => item !== itemName)
    setList(newList)
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
            <div className="itemContainer">
              <span className="itemName" key={index}>
                :: {item}
              </span>
              <FontAwesomeIcon
                icon={faTrash}
                className="deleteIcon"
                onClick={() => handleDelete(item)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TodoList
