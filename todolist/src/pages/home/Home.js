import React, { useState } from 'react';
import List from '../../components/list/List';
import data from '../../models/data.json';
import Input from '../../components/input/Input';


export default function Home() {

    const [items, setItems] = useState(data);

    const setIds = (temp) => {
        temp = temp.map((task, index) => {
            return {...task, id: index}
        })
        return temp
    }

    const handleToggle = (id) => {
        let mapped = items.map(task => {
            return task.id === Number(id) ? {...task, complete: !task.complete} : {...task};
        });
        setItems(mapped);
    };

    const handleFilter = () => {
        let filtered = items.filter( task => {
            return !task.complete;
        });
        setItems(setIds(filtered));
    };

    const handleAddingTask = async (taskValue) => {
        const newTask = {
            id: items.length + 1,
            task: taskValue,
            complete: false
        };
        let temp = [...items];
        temp.push(newTask);
        setItems(temp);
    }


  return (
    <div className="Home flex flex-col justify-center content-center">
      <p className=" ptag justify-center text-center ">This is a To-Do List App</p>
      <List items={items} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <Input handleAddingTask={handleAddingTask}/>
      <button 
            className="bg-cyan-600 text-white m-3 p-1 rounded w-fit place-self-center"
            onClick={handleFilter}>
            Clear Completed
        </button>
    </div>
  )
}
