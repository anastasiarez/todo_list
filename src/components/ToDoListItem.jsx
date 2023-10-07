const ToDoListItem = (props) => {
  const { text, onDelete } = props;
  
  const handleDel = () => {
      onDelete(); // Call the onDelete function passed from the parent component 
    }

  return (
  
    <li>
      <span>{props.text}</span>
      <button onClick={handleDel}>DEL</button>
    </li>

  );
};

export default ToDoListItem;