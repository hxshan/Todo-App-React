import { useState } from "react";

function TodoForm({addTodo}){
    var [item, setItem] = useState("");
    const submitTodo = (e) => {
        e.preventDefault();    
        if (item != "") {
            addTodo(item)
        }
        setItem("");
      };
      


return(
    <form action="" className="w-[100%]" onSubmit={submitTodo}>
    <div className="form-row w-[100%] bg-black py-2 px-4">
      <input type="checkbox" name="complete" id="complete" />
      <input
        type="text"
        name="new-todo"
        id="new-todo"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
    </div>
    <input type="submit" className="text-transparent"/>
  </form>
)

}
export default TodoForm;