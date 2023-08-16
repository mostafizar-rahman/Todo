import Todos from "./Components/Todos/Todos";
import { AiOutlinePlus } from "react-icons/ai";
import "./app.scss";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoTable from "./Components/TodoTable/TodoTable";
import { useState } from "react";

const App = () => {
  const [isTodoFormOpen, setIsTodoFormOpen] = useState(false);
  return (
    <div className="app_container">
      <div className={`app_container__todo_form ${isTodoFormOpen ? "app_container__isOpen" : "app_container__isClose"}`}>
        <AddTodo />
      </div>
      <TodoTable/>
      {/* <Todos /> */}
      <button
        className="app_container__plus_icon"
        onClick={() => setIsTodoFormOpen(!isTodoFormOpen)}
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default App;
