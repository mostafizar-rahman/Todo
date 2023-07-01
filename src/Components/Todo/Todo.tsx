import React, { useContext, useState, useRef, useEffect } from "react";
import "./Todo.scss";
import { todoLocalStrogeSetItem } from "../../Utilits/localstroge";
import { TOTO_CONTEXT } from "../../Context/TodoProvider/TodoProvider";
import { actionTypes } from "../../Context/actionTypes/actionTypes";
import useDate from "../../hooks/useDate";
const Todo = () => {
  const formRef = useRef<any>();
  const tagesRef = useRef<any>();
  const { state, dispatch } = useContext(TOTO_CONTEXT);
  const { title, drescriotion, tags, tagInput, endDate, endMonth, endYear } =
    state;
  const [newTags, setNewTags] = useState([] as any);
  const { fullStartDate } = useDate();
  const fullEndDate = {
    endDate,
    endMonth,
    endYear,
  };

  useEffect(() => {
    setNewTags(tags);
  }, [tags]);

  const handleTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Math.random()
      .toString(36)
      .substring(2, length + 10);
    const todoItem = {
      id,
      title,
      drescriotion,
      fullStartDate,
      fullEndDate,
      tags,
    };
    console.log(todoItem);
    dispatch({ type: actionTypes.ADD_TODO_ITEMS, paylod: todoItem });
    dispatch({ type: actionTypes.ADDTODO });
    todoLocalStrogeSetItem(todoItem);
    formRef.current.reset();
    // setNewTags([]);
    // tags.length = 0
  };
  // console.log(newTags)
  return (
    <div className="todo__container">
       <h3 className='title'>ToDo</h3>
      <form onSubmit={handleTodoSubmit} ref={formRef}>
        <label htmlFor="title">Title</label>
        <input
          placeholder="Title"
          name="title"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: actionTypes.TITLE, paylod: e.target.value })
          }
        />
        <label htmlFor="details">Details</label>
        <textarea
          placeholder="Details"
          name="details"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            dispatch({ type: actionTypes.DETAILS, paylod: e.target.value })
          }
        />
        <label htmlFor="">Tags</label>
        <div className="tag_wapper">
          {newTags.map((tag: any, id: any) => {
            return (
              <div key={id} className="tag" ref={tagesRef}>
                {tag}
                <button type="button" className="button">
                  x
                </button>
              </div>
            );
          })}

          <textarea
            value={tagInput}
            placeholder="Tags"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              dispatch({ type: actionTypes.TAG_INPUT, paylod: e.target.value })
            }
            onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) =>
              dispatch({ type: actionTypes.TAGS, paylod: e.key })
            }
          />
        </div>
        <div className="date_wapper">
          <div>
            <label htmlFor="">Start Date</label>
            <div className="field_group">
              <input
                type="text"
                name=""
                id=""
                placeholder="Date"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch({
                    paylod: e.target.value,
                    type: actionTypes.STARTDATE,
                  })
                }
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Month"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch({
                    paylod: e.target.value,
                    type: actionTypes.STARTMONTH,
                  })
                }
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Year"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch({
                    paylod: e.target.value,
                    type: actionTypes.STARTYEARS,
                  })
                }
              />
            </div>
          </div>
          <div>
            <label htmlFor="">End Date</label>
            <div className="field_group">
              <input
                type="text"
                name=""
                id=""
                placeholder="Date"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch({
                    paylod: e.target.value,
                    type: actionTypes.END_DATE,
                  })
                }
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Month"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch({
                    paylod: e.target.value,
                    type: actionTypes.END_MONTH,
                  })
                }
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Year"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch({
                    paylod: e.target.value,
                    type: actionTypes.END_YEAR,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div>
          <i>{state.error}</i>
        </div>

        <button
          type="submit"
          className="submit_button"
          disabled={state.error ? true : false}
        >
          Add ToDo
        </button>
      </form>
    </div>
  );
};

export default Todo;
