import React, { useContext, useEffect, useState } from "react";
import {
  editTodoLocalStroge,
  localStorageGetTodo,
} from "../../Utilits/localstroge";
import "./TodoTable.scss";
import { TOTO_CONTEXT } from "../../Context/TodoProvider/TodoProvider";

const TodoTable = () => {
  const [totoList, setTodoList] = useState([]);
  const [updateTodo, setUpdateTodo] = useState({} as any);
  const {state} = useContext(TOTO_CONTEXT)
  const {todoTitems} = state

  useEffect(() => {
    const todos = localStorageGetTodo();
    setTodoList(todos||todoTitems);
  }, [todoTitems]);

  const handleUpdateTodoValue = (e: any) => {

    setUpdateTodo({ [e.target.name]: e.target.value });
  };
  const handleUpdateTodoSeve = (id: any) => {
    editTodoLocalStroge({ id, updateTodo });
  };
  const handleUpdateTodoTagSeve = ({id, index}: any) => {
    console.log(index, updateTodo);
    editTodoLocalStroge({id, index, updateTodo });
  };

  return (
    <div className="todo__table">
      <div>
        <ul className="title">
          <li>Title</li>
          <li>Drescriotion</li>
          <li>Start Date</li>
          <li>Tag</li>
          {/* <li></li> */}
        </ul>
        <div>
          {totoList?.map(
            ({ id, title, drescriotion, fullStartDate,fullEndDate, tags }: any) => {
              return (
                <ul key={id} className="table_content">
                  <li className="title_wapper">
                    <input
                      type="text"
                      name="title"
                      defaultValue={title}
                      onChange={(e) => handleUpdateTodoValue(e)}
                      onBlur={() => handleUpdateTodoSeve(id)}
                    />
                  </li>
                  <li>
                   
                    <textarea
                      // type="text"
                      name="drescriotion"
                      defaultValue={drescriotion}
                      onChange={(e) => handleUpdateTodoValue(e)}
                      onBlur={() => handleUpdateTodoSeve(id)}
                    />
                  </li>
                  <li className="date_wapper">
                    <input
                      type="text"
                      name="startDate"
                      defaultValue={fullStartDate?.startDate}
                      onChange={(e) => handleUpdateTodoValue(e)}
                      onBlur={() => handleUpdateTodoSeve(id)}
                    />
                    <input
                      type="text"
                      name="startMonth"
                      defaultValue={fullStartDate?.startMonth}
                      onChange={(e) => handleUpdateTodoValue(e)}
                      onBlur={() => handleUpdateTodoSeve(id)}
                    />
                    <input
                      type="text"
                      name="startYear"
                      defaultValue={fullStartDate?.startYear}
                      onChange={(e) => handleUpdateTodoValue(e)}
                      onBlur={() => handleUpdateTodoSeve(id)}
                    />
                  </li>
                  <li className="date_wapper">
                    <input
                      type="text"
                      name="endDate"
                      defaultValue={fullEndDate?.endDate}
                      onChange={(e) => handleUpdateTodoValue(e)}
                      onBlur={() => handleUpdateTodoSeve(id)}
                    />
                    <input
                      type="text"
                      name="endMonth"
                      defaultValue={fullEndDate?.endMonth}
                      onChange={(e) => handleUpdateTodoValue(e)}
                      onBlur={() => handleUpdateTodoSeve(id)}
                    />
                    <input
                      type="text"
                      name="endYear"
                      defaultValue={fullEndDate?.endYear}
                      onChange={(e) => handleUpdateTodoValue(e)}
                      onBlur={() => handleUpdateTodoSeve(id)}
                    />
                  </li>
                  <li className="tag_wapper">
                    {tags?.map((tag: any, index: any) => {
                      return (
                        <div key={index}>
                          <input
                            type="text"
                            name={index}
                            defaultValue={tag}
                            onChange={(e) => handleUpdateTodoValue(e)}
                            onBlur={() => handleUpdateTodoTagSeve({id, index})}
                          />
                        </div>
                      );
                    })}
                  </li>
                </ul>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoTable;
