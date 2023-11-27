import { useState } from "react";
import images from "../assets";

function TodoForm({ addTodo }) {
  var [item, setItem] = useState("");
  var [check,SetCheck]=useState(false);
  const submitTodo = (e) => {
    e.preventDefault();
    if (item.value != "") {
      addTodo(item,check);
    }
    setItem("");
    SetCheck(false);
  };

  return (
    <form action="" className="w-[100%] mt-8" onSubmit={submitTodo}>
      <div
        className="form-row flex w-[100%] bg-Very-Light-Gray 
        dark:bg-Very-Dark-Desaturated-Blue 
        items-center px-4  rounded-lg py-1">

        <label
          htmlFor="complete"
          className="checkbox-label w-[27px] h-[24px] flex 
          justify-center items-center rounded-full outline 
          outline-1 outline-Very-Dark-Grayish-Blue
          hover:cursor-pointer"
        >
          <input
            type="checkbox"
            name="complete"
            id="complete"
            className="invisible absolute peer"
            checked={check?"checked":""}
            onChange={(e) => {
              SetCheck(e.target.checked);
            }}
          />
          <img
            className="invisible peer-checked:visible"
            src={images.check}
            alt="check"
          />
        </label>
        <input
          className="w-[100%] h-10 ml-2 focus:outline-none bg-Very-Light-Gray
          dark:bg-Very-Dark-Desaturated-Blue 
          dark:text-Very-Light-Grayish-Blue"
          type="text"
          name="new-todo"
          id="new-todo"
          value={item}
          placeholder="Create a new Todo.."
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
      </div>
      <input type="submit" className="invisible" />
    </form>
  );
}
export default TodoForm;
