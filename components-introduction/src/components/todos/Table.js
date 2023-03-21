import { SingleTodo } from "./SingleToDo";
import { useEffect, useState } from "react";

export function Table() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/todos")
      .then((res) => res.json())
      .then((result) => {
        setTodos(Object.values(result));
      });
  }, []);

  function onTodoClick(todoId) {
    setTodos((oldTodos) =>
      oldTodos.map((x) =>
        x._id == todoId ? { ...x, isCompleted: !x.isCompleted } : x
      )
    );
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-header-task">Task</th>
          <th className="table-header-status">Status</th>
          <th className="table-header-action">Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((x) => (
          <SingleTodo key={x._id} {...x} onClick={onTodoClick} />
        ))}
      </tbody>
    </table>
  );
}
