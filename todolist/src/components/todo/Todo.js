import React, { memo } from 'react'

function Todo( { todo, handleToggle } ) {

  const handleClick = (event) => {
      event.preventDefault()
      handleToggle(event.currentTarget.id)
    }

  return (
    <div 
      id={todo.id}
      key={todo.id + todo.content}
      value={todo.id}
      className= {todo.complete ? " bg-yellow-200 flex line-through cursor-pointer m-2 " : "bg-yellow-200 flex cursor-pointer m-2"}>
        <div className="container bg-yellow-400 w-fit p-1 mr-1 cursor-move "> <i className="fa-solid fa-align-justify"/> </div>
        <p id={todo.id} className= {todo.complete ? "line-through w-fit cursor-pointer p-1" : "w-fit cursor-pointer p-1"} onClick={handleClick} > {todo.task} </p> 
    </div>
  )
}

export default memo(Todo);