import React from 'react'

export default function Todo( { todo, handleToggle } ) {

    const handleClick = (event) => {
        event.preventDefault()
        handleToggle(event.currentTarget.id)
    }



  return (
    <div 
        id={todo.id}
        key={todo.id + todo.content}
        value={todo.id}
        onClick={handleClick}
        className= {todo.complete ? "line-through cursor-pointer" : " cursor-pointer"}>
        {todo.task} 
    </div>
  )
}
