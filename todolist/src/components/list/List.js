import React from 'react'
import Todo from '../todo/Todo';

export default function List( {items, handleToggle} ) {


  return (
    <div className="List flex flex-col text-center justify-center mt-2">
        {(!items) ? "No task to-do" : items.map(task => {
            return <Todo key={task.id} todo={task} handleToggle={handleToggle}/>
        }) }
    </div>
  )
}
