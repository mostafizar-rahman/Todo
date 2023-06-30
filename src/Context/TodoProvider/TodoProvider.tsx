import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";
import { InitialStateType } from "../../Utilits/types";

type xx = { state: InitialStateType; dispatch: any };
export const TOTO_CONTEXT = createContext<xx>({} as xx);

type childrenPropsType = {
  children: React.ReactNode;
};
const TodoProvider = ({ children }: childrenPropsType) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(first)

  return (
    <TOTO_CONTEXT.Provider value={{ state, dispatch }}>
      {children}
    </TOTO_CONTEXT.Provider>
  );
};

export default TodoProvider;
