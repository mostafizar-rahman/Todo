import { useContext, useEffect, useState } from "react";
import {
  deleteTodoLocalstoge,
  editTodoLocalStroge,
  localStorageGetTodo,
} from "../../Utilits/localstroge";
import "./TodoTable.scss";
import { TOTO_CONTEXT } from "../../Context/TodoProvider/TodoProvider";
import { InitialStateType } from "../../Utilits/types";

import deleteButton from "../../assets/icons/delete.png";
import editButton from "../../assets/icons/editing.png";


const TodoTable = () => {
  const [totoList, setTodoList] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [updateTodo, setUpdateTodo] = useState({} as any);
  const { state } = useContext(TOTO_CONTEXT);
  const { todoTitems } = state;

  useEffect(() => {
    const todos = localStorageGetTodo();

    // First time load localstorge todos list then when add a new todo it load on time
    setTodoList(todos || todoTitems);
  }, [todoTitems]);


  const handleUpdateTodoValue = (e: any) => {
    setUpdateTodo({ [e.target.name]: e.target.value });
  };

  const handleUpdateTodoSeve = (id: any) => {
    editTodoLocalStroge({ id, updateTodo });
  };
  const handleUpdateTodoTagSeve = ({ id, index }: any) => {
    editTodoLocalStroge({ id, index, updateTodo });
  };

  const handleDeleteTodo = (id: any) => {
    const withOutDeleteItem = totoList.filter((item: InitialStateType) => item.id !== id);
    setTodoList(withOutDeleteItem);
    deleteTodoLocalstoge(id);
  };

  const handleEditTodo = (id: any) => {
    if (id) {
      setSelectedItemId(id);
    }
  };

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
              {/* ------------------------------ Left Side */}
              <div className="left_side">
                {/* ------------- Title */}
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
                    readOnly={selectedItemId !== id ? true : false}
                    defaultValue={title}
                    onChange={(e) => handleUpdateTodoValue(e)}
                    onBlur={() => handleUpdateTodoSeve(id)}
                  />
                </div>
                {/*-------------- Detalis */}
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
                    name="drescriotion"
                    readOnly={selectedItemId !== id ? true : false}
                    defaultValue={drescriotion}
                    onChange={(e) => handleUpdateTodoValue(e)}
                    onBlur={() => handleUpdateTodoSeve(id)}
                  />
                </div>
                <div className="date_wapper">
                  {/* ------------- Start Date */}
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
                        readOnly={selectedItemId !== id ? true : false}
                        defaultValue={fullStartDate?.startDate}
                        onChange={(e) => handleUpdateTodoValue(e)}
                        onBlur={() => handleUpdateTodoSeve(id)}
                      />
                      <input
                        type="text"
                        name="startMonth"
                        readOnly={selectedItemId !== id ? true : false}
                        defaultValue={fullStartDate?.startMonth}
                        onChange={(e) => handleUpdateTodoValue(e)}
                        onBlur={() => handleUpdateTodoSeve(id)}
                      />
                      <input
                        type="text"
                        name="startYear"
                        readOnly={selectedItemId !== id ? true : false}
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
                        readOnly={selectedItemId !== id ? true : false}
                        defaultValue={fullEndDate?.endDate}
                        onChange={(e) => handleUpdateTodoValue(e)}
                        onBlur={() => handleUpdateTodoSeve(id)}
                      />
                      <input
                        type="text"
                        name="endMonth"
                        readOnly={selectedItemId !== id ? true : false}
                        defaultValue={fullEndDate?.endMonth}
                        onChange={(e) => handleUpdateTodoValue(e)}
                        onBlur={() => handleUpdateTodoSeve(id)}
                      />
                      <input
                        type="text"
                        name="endYear"
                        readOnly={selectedItemId !== id ? true : false}
                        defaultValue={fullEndDate?.endYear}
                        onChange={(e) => handleUpdateTodoValue(e)}
                        onBlur={() => handleUpdateTodoSeve(id)}
                      />
                    </div>
                  </div>
                </div>
                {/* --------------Tags */}
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
                            readOnly={selectedItemId !== id ? true : false}
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
              {/* ----------------------------- Right Side */}
              <div className="right_side">
                <button onClick={() => handleDeleteTodo(id)}>
                  <img src={deleteButton} />
                </button>
                <button onClick={() => handleEditTodo(id)}>
                  <img src={editButton} />
                </button>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default TodoTable;
