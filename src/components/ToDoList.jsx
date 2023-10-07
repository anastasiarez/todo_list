import { useState } from 'react';
import ToDoListInput from './ToDoListInput';
import ToDoListItem from './ToDoListItem';

import './todoList.css';

const ToDoList = () => {
  const [todoItems, setTodoItems] = useState([]); //we need to add an empty array because .map has to itterate over it

  const addToDoItem = (todoText) => {
    const newTodo = { id: todoItems.length + 1, text: todoText, isDone: false };
    setTodoItems([...todoItems, newTodo]);
  };

  const removeToDoItem = (itemId) => {
    const updatedItems = todoItems.filter((todo) => todo.id !== itemId);
    setTodoItems(updatedItems);

  };

  const renderListItems = () => {
    return todoItems.map(todo => (
      <ToDoListItem
        text={todo.text}
        key={todo.id}
        onDelete={() => removeToDoItem(todo.id)} /> // Pass removeToDoItem function 
    ));
  };

  return (
    <section className="todo-list">
      <h2>ToDo App</h2>
      <ToDoListInput add={addToDoItem} />
      <ul>
        {renderListItems()}
      </ul>

      <p>Pending tasks: {todoItems.length}</p>

    </section>

  );
};

export default ToDoList;