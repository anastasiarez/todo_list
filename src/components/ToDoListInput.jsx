import { useState } from "react";

const ToDoListInput = (props) => {

  const [inputValue, setInputValue] = useState();

  const handleInput = (event) => { //when we type into the input field we want to see the content. its an event, html object which then you can see via event.target.value
    setInputValue(event.target.value);
  };

  const handleAddButton = () => {
    props.add(inputValue);
    setInputValue(""); //to clear the input field once new todo list was added
  };
  return (
    <div className='todo-list--input'>
      <input
        value={inputValue}
        onChange={handleInput}
        type="text"
        placeholder='Add task' />
      <button onClick={handleAddButton}>+</button>
    </div>
  );
};

export default ToDoListInput;