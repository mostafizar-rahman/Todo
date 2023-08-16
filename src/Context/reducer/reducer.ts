import { InitialStateType } from "../../Utilits/types";
import { actionTypes } from "../actionTypes/actionTypes";

export const initialState = {
  todoTitems: [],
};

type ActionTypes = {
  paylod: String;
  type: "ADD_TODO_ITEMS";
};



export const reducer = (state: InitialStateType, action: ActionTypes) => {
  switch (action.type) {


    // ---------------- Todo items added an array
    case actionTypes.ADD_TODO_ITEMS:
      return {
        ...state,
        todoTitems: [...state.todoTitems, action.paylod],
      };

    default:
      throw new Error();
  }
};
