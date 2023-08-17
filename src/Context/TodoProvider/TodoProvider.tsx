import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";
import { InitialStateType } from "../../Utilits/types";

type contextType = { state: InitialStateType; dispatch: any };
export const TOTO_CONTEXT = createContext<contextType>({} as contextType);

type childrenPropsType = {
  children: React.ReactNode;
};
const TodoProvider = ({ children }: childrenPropsType) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TOTO_CONTEXT.Provider value={{ state, dispatch }}>
      {children}
    </TOTO_CONTEXT.Provider>
  );
};

export default TodoProvider;
