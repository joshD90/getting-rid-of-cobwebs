import { FC, useReducer, useState } from "react";
import ToDoItem from "../toDoItem/ToDoItem";
import "./toDoList.css";
import CreateNewItem from "../createNewItem/CreateNewItem";
import { listReducer } from "../../../reducers/listReducer";

export type List = {
  id: number;
  title: string;
  content: string;
  completed: boolean;
};

const listItem = {
  id: 1,
  title: "Item 1",
  content: "Really Get Back on that Horse Josh",
  completed: false,
};

const ToDoList = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  const [createVisible, setCreateVisible] = useState(true);

  return (
    <div className="listContainer">
      {list.map((item) => (
        <ToDoItem list={item} dispatch={dispatch} />
      ))}
      {!createVisible && (
        <button onClick={() => setCreateVisible(true)} className="newButton">
          Create New
        </button>
      )}
      {createVisible && (
        <CreateNewItem
          visible={createVisible}
          setVisible={setCreateVisible}
          dispatch={dispatch}
        />
      )}
    </div>
  );
};

export default ToDoList;
