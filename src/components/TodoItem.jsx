import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

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
      className="flex w-[100%] h-6 justify-between border-2 border-black" 
      >
      <div className="flex w-[100%]">
        <input
          
          type="checkbox"
          className="todo-complete"
          name="todo-complete"
          defaultChecked={isComplete}
          onChange={(e) => toggleComplete(id, e.target.checked)}
        />
        <div className="todo-text ml-5 w-[100%]" {...attributes} {...listeners}>
          <p className="todo" name="todo">
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
        X
      </button>
    </div>
  );
}
export default TodoItem;
