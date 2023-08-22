import { FC, SetStateAction, useState } from "react";
import "./createNewItem.css";
import { List } from "../toDoList/ToDoList";

type Props = {
  visible: boolean;
  setVisible: React.Dispatch<SetStateAction<boolean>>;
  dispatch: React.Dispatch<{ type: string; payload: Partial<List> }>;
};

const CreateNewItem: FC<Props> = ({ visible, setVisible, dispatch }) => {
  const [item, setItem] = useState<Partial<List>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="createItemContainer">
      <div className="inputDiv">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" onChange={handleChange} />
      </div>
      <div className="inputDiv">
        <label htmlFor="content">Content</label>
        <textarea name="content" onChange={handleChange} />
      </div>
      <div className="buttonDiv">
        <button
          className="save"
          onClick={() => dispatch({ type: "ADD ITEM", payload: item })}
        >
          Save
        </button>
        <button onClick={() => setVisible(false)}>Close</button>
      </div>
    </div>
  );
};

export default CreateNewItem;
