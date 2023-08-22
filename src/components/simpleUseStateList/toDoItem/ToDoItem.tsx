import React, { FC, SetStateAction } from "react";
import "./toDoItem.css";
import { List } from "../toDoList/toDoList";

type Props = {
  listContent: List;
  updateList: (newItem: List) => void;
};

const ToDoItem: FC<Props> = ({ listContent, updateList }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateList({
      content: listContent.content,
      id: listContent.id,
      checked: e.target.checked,
    });
  };

  return (
    <div className={`itemContainer ${listContent.checked && "checkedBg"}`}>
      <p>{listContent.content}</p>
      <input type="checkbox" onChange={handleChange} />
    </div>
  );
};

export default ToDoItem;
