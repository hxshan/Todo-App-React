import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import images from "../assets";

function TodoItem({ id, todo, isComplete,toggleComplete, deleteTodo}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  }=useSortable({id:id})

const style={
  transform:CSS.Transform.toString(transform),
  transition
}

  return (
    <div
      ref={setNodeRef} style={style}  key={id} 
      className="flex w-[100%] px-4 h-fit py-3
      justify-between
      border-b-[1px]
      border-b-Dark-Grayish-Blue
      bg-Very-Light-Gray 
      dark:bg-Very-Dark-Desaturated-Blue
      dark:text-Very-Light-Gray 
      first-of-type:rounded-t-md
      font-JosefinSans
      font-bold"

      >
      <div className="flex w-[100%] py-1">
        
      <label htmlFor={"todo-complete-"+id}
      className="todo-complete-label w-[27px] h-[24px] flex 
          justify-center items-center rounded-full outline 
          outline-1 outline-Very-Dark-Grayish-Blue
          hover:cursor-pointer hover:outline-Check-Background-To
          lg:h-[27px]">
            
          <input
          type="checkbox"
          className="todo-complete peer absolute w-[20px] h-[20px] 
          hover:cursor-pointer opacity-0"
          name="todo-complete"
          id={"todo-complete-"+id}
          defaultChecked={isComplete}
          onChange={(e) => toggleComplete(id, e.target.checked)}
        />
        <img
            className="invisible peer-checked:visible"
            src={images.check}
            alt="check"
          />
      </label>
        <div className="todo-text ml-5 w-[90%]" {...attributes} {...listeners}>
          <p className={isComplete?"todo line-through text-Light-Grayish-Blue dark:text-Very-Dark-Grayish-Blue font-normal":"todo text-Very-Dark-Grayish-Blue dark:text-Light-Grayish-Blue"} name="todo" >
            {todo}
          </p>
        </div>
      </div>

      <button
        type="button"
        name="delete"
        className="deleteItem"
        onClick={() => { deleteTodo(id);}}
      >
        <img src={images.cross} alt="" />
      </button>
    </div>
  );
}
export default TodoItem;
