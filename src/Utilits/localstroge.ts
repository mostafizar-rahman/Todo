import { TodoType } from "./types";

export const todoLocalStrogeSetItem = (todo: TodoType) => {
  const previousTodo = localStorage.getItem("todos");

  if (previousTodo) {
    const xx = JSON.parse(previousTodo);
    localStorage.setItem("todos", JSON.stringify([...xx, todo]));
  } else {
    localStorage.setItem("todos", JSON.stringify([todo]));
  }
};

export const localStorageGetTodo = () => {
  const todoList = localStorage.getItem("todos");
  if (todoList) {
    return JSON.parse(todoList);
  }
};

export const editTodoLocalStroge = ({index, id, updateTodo }: any) => {
  const previousTodo = localStorage.getItem("todos");

  if (previousTodo) {
    const xx = JSON.parse(previousTodo);
    // const toto = [...xx];
    console.log(updateTodo, "update");
    for (const iterator of xx) {
      console.log("under")
      if (iterator.id === id) {
        const key: any = Object.keys(updateTodo)[0];

        iterator[key] = updateTodo[key];
        iterator.fullStartDate[key] = updateTodo[key];
        iterator.fullEndDate[key] = updateTodo[key];
        iterator.tags[index] = updateTodo[index];

        localStorage.setItem("todos", JSON.stringify([...xx]));
      }
    }
  }
};


export const deleteTodoLocalstoge = (id: any) =>{
  const previousTodo = localStorage.getItem("todos");

  if (previousTodo) {
    const xx = JSON.parse(previousTodo);
    const x = xx.filter((item:any)=> item.id !== id)

    localStorage.setItem("todos", JSON.stringify([...x]));
  }
}
