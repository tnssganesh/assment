import { useState } from "react";
import { v4 } from "uuid";
import TodoItem from "../TodoItem";
import "./index.css";

const TodoInput = () => {
  // state for input todo
  const [input, changeInput] = useState("");

  // updating input todo
  const onChangeInput = (e) => {
    changeInput(e.target.value);
  };

  const [list, changeList] = useState([]);

  // add to todo list
  const onClickAdd = (e) => {
    e.preventDefault();
    const newTodo = {
      id: v4(),
      todo: input,
      isDone: false,
    };

    changeList((pre) => [...pre, newTodo]);
    changeInput("");
  };

   // add to todo list
  const onClickEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newTodo = {
        id: v4(),
        todo: input,
        isDone: false,
      };

      changeList((pre) => [...pre, newTodo]);
      changeInput("");
    }
  };

  //delete todo from list
  const deleteTodo = (id) => {
    const newList = list.filter((i) => i.id !== id);
    changeList(newList);
  };

   //Edit todo from todolist
  const onEditTodo = (id, text) => {
    const currItem = list.filter((i) => i.id === id);
    currItem[0].todo = text;
    const newList = list.filter((i) => i.id !== id);
    changeList([...newList, ...currItem]);
  };

  return (
    <div className="main-todo-container">
      <div className="form-container">
        <form onSubmit={onClickAdd}>
          <h1 className="form-heading">Enter Todo</h1>
          <label htmlFor="todo">Todo</label>
          <br />
          <input
            className="input-Element"
            onKeyDown={onClickEnter}
            onChange={onChangeInput}
            value={input}
            id="todo"
            type="text"
          />
          <br />
          <button className="add-button" type="submit">
            Add
          </button>
        </form>
      </div>

      <div className="todos-container">
        <h1 className="todoList-heading">Todo List</h1>
        <ul>
          {list.map((i) => (
            <TodoItem
              key={i.id}
              todos={i}
              deleteTodo={deleteTodo}
              onEditTodo={onEditTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TodoInput;
