import React, { useEffect, useState } from 'react';
import List from '../../components/list/List';
import Input from '../../components/input/Input';
import { createData, getData } from '../../controller/localStorageController/localStorageControllers';
import addNewTodo from '../../controller/addNewTodo/addNewTodo';
import toggleTodos from '../../controller/toggleTodos/toggleTodos';
import filterTodos from '../../controller/filterTodos/filterTodos';


export default function Home() {

    const [items, setItems] = useState(getData);

    const handleToggle = (id) => {
      setItems(toggleTodos(id));
    }

    const handleFilter = () => {
      setItems(filterTodos);
    }

    const handleAddingTask= async (todoValue) => {
      setItems(addNewTodo(todoValue));
    }

  useEffect(()=>{
    if (!getData()){
      createData();
    } 
  }, [] );

  return (
    <div className="Home flex flex-col justify-center content-center">
      <p className=" ptag justify-center text-center text-2xl p-3 ">This is a To-Do List App</p>
      <List items={items} handleToggle={handleToggle}/>
      <Input handleAddingTask={handleAddingTask}/>
      <button 
        className="bg-cyan-600 text-white m-3 p-1 rounded w-fit place-self-center"
        onClick={handleFilter}>
        Clear Completed
      </button>
    </div>
  )
}