import React, { useContext, useState, useRef } from "react";
import { todoLocalStrogeSetItem } from "../../Utilits/localstroge";
import { TOTO_CONTEXT } from "../../Context/TodoProvider/TodoProvider";
import { actionTypes } from "../../Context/actionTypes/actionTypes";
import { AiOutlineClose } from "react-icons/ai";
import "./AddTodo.scss";
import useDateValidation from "../../Hook/useDateValidation";

const AddTodo = () => {
  const formRef = useRef<any>();
  const tagesRef = useRef<any>();
  const { dispatch } = useContext(TOTO_CONTEXT);
  const [info, setInfo] = useState({
    title: "",
    drescriotion: "",
    startDate: "",
    startMonth: "",
    startYear: "",
    endDate: "",
    endMonth: "",
    endYear: "",
    status: "Open",
  });
  const [tags, setTags] = useState([] as any);
  const error = useDateValidation(info);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const name = e.target.name;
    const value = e.target.value;

    setInfo({ ...info, [name]: value });
  };

  // ----- Tag push an array
  const handleKeuDownTag = (e: any) => {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  };

  // ----- Remove Tag
  function handleRemoveTag(index: number) {
    setTags(tags.filter((_: any, i: number) => i !== index));
  }

  // ------ Form submit
  const handleTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // --- Id generate
    const id = Math.random()
      .toString(36)
      .substring(2, length + 10);

    // --- all todo item
    const todoItem = {
      id,
      title: info.title,
      fullStartDate: {
        startDate: info.startDate,
        startMonth: info.startMonth,
        startYear: info.startYear,
      },
      fullEndDate: {
        endDate: info.endDate,
        endMonth: info.endMonth,
        endYear: info.endYear,
      },
      drescriotion: info.drescriotion,
      status: info.status,
      tags,
    };
    // ---- Todo items set localstroge
    todoLocalStrogeSetItem(todoItem);
    // ---- Todo item display instence
    dispatch({ type: actionTypes.ADD_TODO_ITEMS, paylod: todoItem });
    // --- Clear form
    formRef.current.reset();
    setTags([]);
  };


  return (
    <div className="todo__container">
      <form onSubmit={handleTodoSubmit} ref={formRef}>
        <label htmlFor="title">Title</label>
        <input placeholder="Title" name="title" onChange={handleChange} />
        <label htmlFor="drescriotion">Details</label>
        <textarea
          placeholder="Details"
          name="drescriotion"
          id="drescriotion"
          onChange={handleChange}
        />
        {/* --- Tags */}
        <label htmlFor="">Tags</label>
        <div className="tag_wapper" ref={tagesRef}>
          {tags.map((tag: any, index: any) => {
            return (
              <div key={index} className="tag">
                {tag}
                <button
                  type="button"
                  className="button"
                  onClick={() => handleRemoveTag(index)}
                >
                  <AiOutlineClose />
                </button>
              </div>
            );
          })}

          <textarea
            // value={tags}
            placeholder="Tags"
            name="tag"
            onKeyDown={handleKeuDownTag}
          />
        </div>
        {/* --- Date */}
        <div>
          <div className="date_wapper">
            <div>
              <label htmlFor="">Start Date</label>
              <div className="field_group">
                <input
                  type="text"
                  name="startDate"
                  id=""
                  placeholder="Date"
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="startMonth"
                  id=""
                  placeholder="Month"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="startYear"
                  id=""
                  placeholder="Year"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="">End Date</label>
              <div className="field_group">
                <input
                  type="text"
                  name="endDate"
                  id=""
                  placeholder="Date"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="endMonth"
                  id=""
                  placeholder="Month"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="endYear"
                  id=""
                  placeholder="Year"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <p className="error">{error}</p>
        </div>
        <label htmlFor="status">Status</label>
        <select name="status" id="status" onChange={handleChange}>
          <option value="Open">Open</option>
          <option value="Working">Working</option>
          <option value="Close">Close</option>
        </select>

        <button
          type="submit"
          className="submit_button"
          style={{backgroundColor: error ? "gray" : ""}}
          disabled={error? true : false}
        >
          Add ToDo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
