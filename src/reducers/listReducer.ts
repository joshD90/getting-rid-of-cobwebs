import { List } from "../components/useReducerList/toDoList/ToDoList";

export const listReducer = (
  state: List[],
  action: {
    type: string;
    payload: Partial<List>;
  }
): List[] => {
  switch (action.type) {
    case "ADD ITEM":
      if (!action.payload.title || !action.payload.content)
        throw Error("Must Have Both Title and Content");
      const id = Math.max(...state.map((item) => item.id)) + 1;
      return [
        ...state,
        {
          id: id,
          title: action.payload.title,
          content: action.payload.content,
          completed: false,
        },
      ];
    case "REMOVE ITEM":
      if (!action.payload.id) throw Error("Must have an id to delete");
      const filteredState = state.filter(
        (item) => item.id !== action.payload.id
      );
      return filteredState;

    case "UPDATE COMPLETED":
      if (
        typeof action.payload.id === "undefined" ||
        typeof action.payload.completed === "undefined"
      )
        throw Error("Must Have an ID and Completed Status");
      const updatedState = state.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, completed: action.payload.completed! };
        return item;
      });
      return updatedState;

    default:
      return state;
  }
};
