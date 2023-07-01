import React, { useContext, useEffect, useState } from "react";
import {
  deleteTodoLocalstoge,
  editTodoLocalStroge,
  localStorageGetTodo,
  todoLocalStrogeSetItem,
} from "../../Utilits/localstroge";
import "./TodoTable.scss";
import { TOTO_CONTEXT } from "../../Context/TodoProvider/TodoProvider";
import { InitialStateType } from "../../Utilits/types";

const TodoTable = () => {
  const [totoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState(true);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [updateTodo, setUpdateTodo] = useState({} as any);
  const { state } = useContext(TOTO_CONTEXT);
  const { todoTitems } = state;

  useEffect(() => {
    const todos = localStorageGetTodo();
    setTodoList(todos || todoTitems);
  }, [todoTitems]);

  const handleUpdateTodoValue = (e: any) => {
    setUpdateTodo({ [e.target.name]: e.target.value });
  };
  const handleUpdateTodoSeve = (id: any) => {
    editTodoLocalStroge({ id, updateTodo });
  };
  const handleUpdateTodoTagSeve = ({ id, index }: any) => {
    console.log(index, updateTodo);
    editTodoLocalStroge({ id, index, updateTodo });
  };

  const handleDeleteTodo = (id: any) => {
    const x = totoList.filter((item: InitialStateType) => item.id !== id);
    setTodoList(x);
    deleteTodoLocalstoge(id);
  };

  const handleEditTodo = (id: any) => {
    if (id) {
      setSelectedItemId(id);
      setEditTodo(false);
    }
  };

  // const handle = () =>{
  //   setEditTodo(true)
  //   console.log("first")
  // }

  return (
    <div className="todos__lists">
      {totoList?.map(
        ({
          id,
          title,
          drescriotion,
          fullStartDate,
          fullEndDate,
          tags,
        }: any) => {
          return (
            <div key={id} className="todos__lists_item">
              {/* -------------- Left Side */}
              <div className="left_side">
                <div
                  style={{
                    display:
                      !(selectedItemId === id) && !title.length
                        ? " none"
                        : "block",
                  }}
                >
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={title}
                    onChange={(e) => handleUpdateTodoValue(e)}
                    onBlur={() => handleUpdateTodoSeve(id)}
                  />
                </div>
                <div
                  style={{
                    display:
                      !(selectedItemId === id) && !drescriotion.length
                        ? " none"
                        : "block",
                  }}
                >
                  <label htmlFor="">Details</label>
                  <textarea
                    // type="text"
                    name="drescriotion"
                    defaultValue={drescriotion}
                    onChange={(e) => handleUpdateTodoValue(e)}
                    onBlur={() => handleUpdateTodoSeve(id)}
                  />
                </div>
                <div className="date_wapper">
                  <div
                    style={{
                      display:
                        !(selectedItemId === id) && !fullStartDate.startDate
                          ? " none"
                          : "block",
                    }}
                  >
                    <label htmlFor="">Start Date</label>
                    <div className="date">
                      <input
                        type="text"
                        name="startDate"
                        readOnly={editTodo}
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
                    </div>
                  </div>
                  {/* --------End Date */}
                  <div
                    style={{
                      display:
                        !(selectedItemId === id) && !fullEndDate.endDate
                          ? " none"
                          : "block",
                    }}
                  >
                    <label htmlFor="">End Date</label>
                    <div className="date">
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
                    </div>
                  </div>
                </div>
                <div
                  className="tag_wapper"
                  style={{
                    display:
                      !(selectedItemId === id) && !tags.length
                        ? " none"
                        : "block",
                  }}
                >
                  <label htmlFor="">Tags</label>
                  <div>
                    {tags?.map((tag: any, index: any) => {
                      return (
                        <div key={index} className="tag">
                          <input
                            type="text"
                            name={index}
                            defaultValue={tag}
                            onChange={(e) => handleUpdateTodoValue(e)}
                            onBlur={() =>
                              handleUpdateTodoTagSeve({ id, index })
                            }
                            style={{ width: `${tag?.length}ch` }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* --------------- Right Side */}
              <div className="right_side">
                <button onClick={() => handleDeleteTodo(id)}>Delete</button>
                <button onClick={() => handleEditTodo(id)}>Edit</button>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default TodoTable;
