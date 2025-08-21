

function TodoItem({ task, index, toggleTask, deleteTask }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(index)}
      />
      <span style={{ fontSize:"20px" ,  textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text}
      </span>
      <button  onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
}

export default TodoItem;
