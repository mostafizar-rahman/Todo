import { useContext, useEffect, useState } from "react";
import {
  deleteTodoLocalstoge,
  editTodoLocalStroge,
  localStorageGetTodo,
} from "../../Utilits/localstroge";
import "./TodoTable.scss";
import { TOTO_CONTEXT } from "../../Context/TodoProvider/TodoProvider";
import deleteButton from "../../assets/icons/delete.png";

const TodoTable = () => {
  const [totoList, setTodoList] = useState([]);
  const [editSelectedItem, setEditSelectedItem] = useState({
    id: "",
    name: "",
  });
  const [updateTodo, setUpdateTodo] = useState({} as any);
  const [loading, setLoading] = useState(false);
  const { state } = useContext(TOTO_CONTEXT);
  const { todoTitems } = state;

  useEffect(() => {
    const todos = localStorageGetTodo();

    if (todos.length) {
      // First time load localstorge todos list then when add a new todo it load on time
      setTodoList(todos || todoTitems);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [todoTitems]);

  const handleUpdateTodoValue = (e: any) => {
    setUpdateTodo({ [e.target.name]: e.target.value });
  };

  const handleUpdateTodoSeve = (id: any) => {
    editTodoLocalStroge({ id, updateTodo });
  };

  // ------ Delete todo 
  const handleDeleteTodo = (id: any) => {
    const withOutDeleteItem = totoList.filter((item: any) => item.id !== id);
    setTodoList(withOutDeleteItem);
    deleteTodoLocalstoge(id);
  };

  // -------
  const handleEditTodo = (id: string, e: any) => {
    const name = e.target.name;
    if (id) {
      setEditSelectedItem({ id, name });
    }
  };

  return (
    <>
      {loading ? (
        <div className="doc">
          <h5>How To Use this app?</h5>
          <ul>
            <b>Input Todo</b>
            <li>You will see a button on the bottom right side.</li>
            <li>Click the button it will show a todo input field popup.</li>
            <li>
              Now input your todo. Filling the input field is not mandatory but
              If you fill date field then you need to go through some
              validation.
            </li>
            <li>
              Now click on the bottom right side button the popup will be hide.
            </li>
          </ul>
          <ul>
            <b>Edit Todo</b>
            <li>Double click on the part you want to edit.</li>
            <li>Then input the text or number as per your requirement.</li>
            <li>
              Now when you click anywhere it will automatically save the list.
            </li>
          </ul>
          <p className="">Thanks For Use The App</p>
        </div>
      ) : (
        <div className="todos__lists">
          {totoList?.map(
            ({
              id,
              title,
              drescriotion,
              fullStartDate,
              fullEndDate,
              tags,
              status,
            }: any) => {
              return (
                <div key={id} className="todos__lists_item">
                  {/* ------ Header */}
                  <div className="Header">
                    {/* ------------- Start Date */}
                    <div>
                      <label htmlFor="">Start Date</label>
                      <div className="date">
                        <input
                          style={{
                            border:
                              editSelectedItem.id === id &&
                              editSelectedItem.name === "startDate"
                                ? "1px solid #dddddd"
                                : "0px",
                          }}
                          type="text"
                          name="startDate"
                          readOnly={
                            editSelectedItem.id === id &&
                            editSelectedItem.name === "startDate"
                              ? false
                              : true
                          }
                          defaultValue={fullStartDate?.startDate}
                          onChange={(e) => handleUpdateTodoValue(e)}
                          onBlur={() => handleUpdateTodoSeve(id)}
                          onDoubleClick={(e) => handleEditTodo(id, e)}
                        />
                        <input
                          style={{
                            border:
                              editSelectedItem.id === id &&
                              editSelectedItem.name === "startMonth"
                                ? "1px solid #dddddd"
                                : "0px",
                          }}
                          type="text"
                          name="startMonth"
                          readOnly={
                            editSelectedItem.id === id &&
                            editSelectedItem.name === "startMonth"
                              ? false
                              : true
                          }
                          defaultValue={fullStartDate?.startMonth}
                          onChange={(e) => handleUpdateTodoValue(e)}
                          onBlur={() => handleUpdateTodoSeve(id)}
                          onDoubleClick={(e) => handleEditTodo(id, e)}
                        />
                        <input
                          style={{
                            border:
                              editSelectedItem.id === id &&
                              editSelectedItem.name === "startYear"
                                ? "1px solid #dddddd"
                                : "0px",
                          }}
                          type="text"
                          name="startYear"
                          readOnly={
                            editSelectedItem.id === id &&
                            editSelectedItem.name === "startYear"
                              ? false
                              : true
                          }
                          defaultValue={fullStartDate?.startYear}
                          onChange={(e) => handleUpdateTodoValue(e)}
                          onBlur={() => handleUpdateTodoSeve(id)}
                          onDoubleClick={(e) => handleEditTodo(id, e)}
                        />
                      </div>
                    </div>
                    {/* --------End Date */}
                    <div className="end_date">
                      <label htmlFor="">End Date</label>
                      <div className="date ">
                        <input
                          style={{
                            border:
                              editSelectedItem.id === id &&
                              editSelectedItem.name === "endDate"
                                ? "1px solid #dddddd"
                                : "0px",
                          }}
                          type="text"
                          name="endDate"
                          readOnly={
                            editSelectedItem.id === id &&
                            editSelectedItem.name === "endDate"
                              ? false
                              : true
                          }
                          defaultValue={fullEndDate?.endDate}
                          onChange={(e) => handleUpdateTodoValue(e)}
                          onBlur={() => handleUpdateTodoSeve(id)}
                          onDoubleClick={(e) => handleEditTodo(id, e)}
                        />
                        <input
                          style={{
                            border:
                              editSelectedItem.id === id &&
                              editSelectedItem.name === "endMonth"
                                ? "1px solid #dddddd"
                                : "0px",
                          }}
                          type="text"
                          name="endMonth"
                          readOnly={
                            editSelectedItem.id === id &&
                            editSelectedItem.name === "endMonth"
                              ? false
                              : true
                          }
                          defaultValue={fullEndDate?.endMonth}
                          onChange={(e) => handleUpdateTodoValue(e)}
                          onBlur={() => handleUpdateTodoSeve(id)}
                          onDoubleClick={(e) => handleEditTodo(id, e)}
                        />
                        <input
                          style={{
                            border:
                              editSelectedItem.id === id &&
                              editSelectedItem.name === "endYear"
                                ? "1px solid #dddddd"
                                : "0px",
                          }}
                          type="text"
                          name="endYear"
                          readOnly={
                            editSelectedItem.id === id &&
                            editSelectedItem.name === "endYear"
                              ? false
                              : true
                          }
                          defaultValue={fullEndDate?.endYear}
                          onChange={(e) => handleUpdateTodoValue(e)}
                          onBlur={() => handleUpdateTodoSeve(id)}
                          onDoubleClick={(e) => handleEditTodo(id, e)}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="">Status</label>
                      <input
                        style={{
                          border:
                            editSelectedItem.id === id &&
                            editSelectedItem.name === "status"
                              ? "1px solid #dddddd"
                              : "0px",
                        }}
                        type="text"
                        name="status"
                        defaultValue={status}
                        readOnly={
                          editSelectedItem.id === id &&
                          editSelectedItem.name === "status"
                            ? false
                            : true
                        }
                        onChange={(e) => handleUpdateTodoValue(e)}
                        onBlur={() => handleUpdateTodoSeve(id)}
                        onDoubleClick={(e) => handleEditTodo(id, e)}
                      />
                    </div>
                  </div>

                  {/* ------------- Center */}
                  <div className="center">
                    <div>
                      <input
                        style={{
                          border:
                            editSelectedItem.id === id &&
                            editSelectedItem.name === "title"
                              ? "1px solid #dddddd"
                              : "0px",
                        }}
                        className="title"
                        type="text"
                        name="title"
                        readOnly={
                          editSelectedItem.id === id &&
                          editSelectedItem.name === "title"
                            ? false
                            : true
                        }
                        defaultValue={title}
                        onChange={(e) => handleUpdateTodoValue(e)}
                        onBlur={() => handleUpdateTodoSeve(id)}
                        onDoubleClick={(e) => handleEditTodo(id, e)}
                      />
                    </div>

                    <div>
                      <textarea
                        style={{
                          border:
                            editSelectedItem.id === id &&
                            editSelectedItem.name === "drescriotion"
                              ? "1px solid #dddddd"
                              : "0px",
                        }}
                        name="drescriotion"
                        readOnly={
                          editSelectedItem.id === id &&
                          editSelectedItem.name === "drescriotion"
                            ? false
                            : true
                        }
                        defaultValue={drescriotion}
                        onChange={(e) => handleUpdateTodoValue(e)}
                        onBlur={() => handleUpdateTodoSeve(id)}
                        onDoubleClick={(e) => handleEditTodo(id, e)}
                      />
                    </div>
                  </div>
                  {/* --------------Footer */}
                  <div className="footer">
                    <div>
                      <div className="tag_wapper">
                        {tags?.map((tag: any, index: any) => {
                          return (
                            <div key={index} className="tag">
                              <input
                                type="text"
                                name={index}
                                readOnly
                                defaultValue={tag}
                                style={{ width: `${tag?.length}ch` }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="icon">
                      <button onClick={() => handleDeleteTodo(id)}>
                        <img src={deleteButton} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      )}
    </>
  );
};

export default TodoTable;
