import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function Input( {handleAddingTask} ) {

  const [input, setInput] = useState("");

  const notify = () => toast('Can not enter an empty note');

  const handleInputChange = (temp) => {
    setInput(temp);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(input === ""){
      notify();
    }else{
      handleAddingTask(input);
    }
    setInput("");
  };

  return (
      <form className="Input flex justify-center mt-3" onSubmit={handleSubmit}>
          <input
            className="bg-yellow-200 p-1 w-10/12"
            value={input}
            onChange={event => handleInputChange(event.target.value)}
            placeholder="Enter Text here"
            />
        <button
            className="submitBtn bg-cyan-600 text-white ml-3 p-1 rounded">
            Submit
        </button>
      </form>
  )
}
