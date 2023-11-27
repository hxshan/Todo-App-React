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
    <div className="todo-div w-[20rem] drop-shadow-md md:w-[35rem] lg:mt-2 text-Light-Grayish-Blue font-JosefinSans ">
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={(e) => handleDragEnd(e)}
      >
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
      <div className="List-buttons flex w-[100%] 
      justify-between bg-Very-Light-Gray rounded-b-md
      dark:bg-Very-Dark-Desaturated-Blue
      py-4 px-4 dark:text-Dark-Grayish-Blue">
        <p>
          <span>{itemCount}</span> items left
        </p>
        <div className="sort-btns hidden md:flex gap-4 font-bold ">
          <button
            className={showing==="All"?"text-Bright-Blue":"hover:text-Dark-Grayish-Blue dark:hover:text-Very-Light-Grayish-Blue"}
            type="button"
            value="All"
            onClick={(e) => SetShowing(e.target.value)}
          >
            All
          </button>
          <button
            className=
            {showing==="Active"?"text-Bright-Blue":"hover:text-Dark-Grayish-Blue dark:hover:text-Very-Light-Grayish-Blue"}
            type="button"
            value="Active"
            onClick={(e) => SetShowing(e.target.value)}
          >
            Active
          </button>
          <button
          className={showing==="Completed"?"text-Bright-Blue":"hover:text-Dark-Grayish-Blue dark:hover:text-Very-Light-Grayish-Blue"}
            type="button"
            value="Completed"
            onClick={(e) => SetShowing(e.target.value)}
          >
            Completed
          </button>
        </div>

        <button
        className="hover:text-Dark-Grayish-Blue dark:hover:text-Very-Light-Grayish-Blue"
          type="button"
          value="ClearCompleted"
          onClick={() => clearcompleted()}
        >
          Clear Completed
        </button>
      </div>
      <div 
      className="sort-btns-mob drop flex justify-center items-center 
      md:hidden w-[20rem] py-1 gap-2 rounded-md mt-8
      bg-Very-Light-Gray dark:bg-Very-Dark-Desaturated-Blue
      dark:text-Very-Light-Gray">
          <button
          className={showing==="All"?"px-3 py-2 text-Bright-Blue":"px-3 py-2"}
            type="button"
            value="All"
            onClick={(e) => SetShowing(e.target.value)}
          >
            All
          </button>
          <button
          className={showing==="Active"?"px-3 py-2 text-Bright-Blue":"px-3 py-2"}
            type="button"
            value="Active"
            onClick={(e) => SetShowing(e.target.value)}
          >
            Active
          </button>
          <button
          className= {showing==="Completed"?"px-3 py-2 text-Bright-Blue":"px-3 py-2"}
            type="button"
            value="Completed"
            onClick={(e) => SetShowing(e.target.value)}
          >
            Completed
          </button>
      </div>
    </div>
  );
}
export default TodoList;
