import { IoIosRemoveCircle } from "react-icons/io";

import { useState } from "react";
import Popup from "reactjs-popup";
import "./index.css";

const TodoItem = (props) => {
  const { todos, deleteTodo, onEditTodo } = props;
  const { id, todo, isDone } = todos;

  const onDelete = () => {
    deleteTodo(id);
  };

  const onEdit = () => {
    //   console.log("hi");
    onEditTodo(id, input);
  };

  const editedTodo = (e) => {
    changeInput(e.target.value);
  };

  const checkedToggle = () => {
    uncheckCheck((pre) => !pre);
  };

  const [input, changeInput] = useState(todo);

  const [check, uncheckCheck] = useState(isDone);

  return (
    <li className={check ? "todo-item-done" : "todo-item"}>
      <input
        className="checkbox"
        onChange={checkedToggle}
        checked={check}
        type="checkbox"
      />
      <p className="todo-text">{todo}</p>

      <div className="popup-container edit-button-container">
        <Popup
          modal
          trigger={
            <button type="button" className="trigger-button edit-button">
              Edit
            </button>
          }
        >
          {(close) => (
            <div className="popup">
              <div>
                <h1>Edit Todo</h1>
                <input
                  className="input"
                  onChange={editedTodo}
                  value={input}
                  type="text"
                />
                <br />
                <button className="edit-button" onClick={onEdit} type="button">
                  Edit
                </button>
              </div>
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                Close
              </button>
            </div>
          )}
        </Popup>
      </div>
      <button className="remove-button" onClick={onDelete} type="button">
        <IoIosRemoveCircle />
      </button>
    </li>
  );
};

export default TodoItem;
