import React, { FC } from "react";
import { List } from "../toDoList/ToDoList";

import "./toDoItem.css";

type Props = {
  list: List;
  dispatch: React.Dispatch<{ type: string; payload: Partial<List> }>;
};

const ToDoItem: FC<Props> = ({ list, dispatch }) => {
  return (
    <div className={`listItemContainer ${list.completed && "completed"}`}>
      <div className="titleContainer">
        <h4>{list.title}</h4>
        <button
          onClick={() =>
            dispatch({ type: "REMOVE ITEM", payload: { id: list.id } })
          }
        >
          X
        </button>
      </div>
      <p>{list.content}</p>
      <input
        type="checkbox"
        onChange={(e) =>
          dispatch({
            type: "UPDATE COMPLETED",
            payload: { id: list.id, completed: e.target.checked },
          })
        }
      />
      <div className="editContainer">
        <button>Edit</button>
      </div>
    </div>
  );
};

export default ToDoItem;
