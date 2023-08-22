import { useCallback, useState } from "react";
import ToDoItem from "../toDoItem/ToDoItem";
import "./toDoList.css";

export type List = { id: number; content: string; checked: boolean };

const listInfo = [
  { content: "hello", checked: false, id: 1 },
  { content: "hello", checked: false, id: 2 },
  { content: "hello", checked: false, id: 3 },
];

const ToDoList = () => {
  const [list, setList] = useState<List[]>(listInfo);

  const updateList = useCallback(
    (newItem: List) => {
      const newList = list.map((item) => {
        if (item.id === newItem.id) return newItem;
        return item;
      });
      setList(newList);
    },
    [setList, list]
  );

  return (
    <div className="container">
      {list.map((item, index) => (
        <ToDoItem listContent={item} key={index} updateList={updateList} />
      ))}
    </div>
  );
};

export default ToDoList;
