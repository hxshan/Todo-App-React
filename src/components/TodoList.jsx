import { useEffect, useState, useRef } from "react";
import TodoItem from "./TodoItem";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function TodoList({
  todos,
  toggleComplete,
  deleteTodo,
  activeTodos,
  completeTodos,
  clearcompleted,
  handleDragEnd,
}) {
  var [showing, SetShowing] = useState("All");
  var [itemCount, SetItemCount] = useState(todos.length);

  useEffect(() => {
    if (showing === "All") SetItemCount(todos.length);
    else if (showing == "Active") SetItemCount(activeTodos.length);
    else SetItemCount(completeTodos.length);
  }, [showing, todos]);


 

  return (
    <div className="todo-div">
      <DndContext collisionDetection={closestCenter} onDragEnd={(e)=>handleDragEnd(e)}>
        <SortableContext items={todos} strategy={verticalListSortingStrategy}>
          {showing === "All" &&
            todos.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  todo={todo.todo}
                  isComplete={todo.isComplete}
                  deleteTodo={deleteTodo}
                  toggleComplete={toggleComplete}
                />
              );
            })}
          {showing === "Active" &&
            activeTodos.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  todo={todo.todo}
                  isComplete={todo.isComplete}
                  deleteTodo={deleteTodo}
                  toggleComplete={toggleComplete}
                />
              );
            })}
          {showing === "Completed" &&
            completeTodos.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  todo={todo.todo}
                  isComplete={todo.isComplete}
                  deleteTodo={deleteTodo}
                  toggleComplete={toggleComplete}
                />
              );
            })}
        </SortableContext>
      </DndContext>
      <div className="List-buttons flex w-[100%] justify-between">
        <p>
          <span>{itemCount}</span> items left
        </p>
        <button
          type="button"
          value="All"
          onClick={(e) => SetShowing(e.target.value)}
        >
          All
        </button>
        <button
          type="button"
          value="Active"
          onClick={(e) => SetShowing(e.target.value)}
        >
          Active
        </button>
        <button
          type="button"
          value="Completed"
          onClick={(e) => SetShowing(e.target.value)}
        >
          Completed
        </button>
        <button
          type="button"
          value="ClearCompleted"
          onClick={() => clearcompleted()}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}
export default TodoList;
