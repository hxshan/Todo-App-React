import { useEffect, useState ,useRef} from "react";
import images from "./assets";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import{
DndContext,
closestCenter
}from "@dnd-kit/core"
import{
arrayMove,
SortableContext,
verticalListSortingStrategy
}from "@dnd-kit/sortable"


function App() {

  var localTodos=JSON.parse(localStorage.getItem('todos'))==null?[]:JSON.parse(localStorage.getItem('todos'))
  var [todos, setTodos] = useState(localTodos);
  var [activeTodos, setActiveTodos] = useState([]);
  var [completeTodos, setCompleteTodos] = useState([]);
  const Systheme=window.matchMedia("(prefers-color-scheme: dark)");
  var [userTheme,setUserTheme]=useState(()=>Systheme == true ? "dark":"light")

  useEffect(() => {
    setActiveTodos(() => {
      return todos.filter((todo) => todo.isComplete !== true);
    });
    setCompleteTodos(() => {
      return todos.filter((todo) => todo.isComplete !== false);
    });
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos]);
 
  function handleDragEnd(event) {
    const {active,over}=event
    

    if(active.id!== over.id){
      setTodos((todos)=>{
        const activeIndex=todos.findIndex(todo=>todo.id===active.id)
        const overindex=todos.findIndex(todo=>todo.id===over.id)
        return arrayMove(todos,activeIndex,overindex)
      })
    }


  }
  function toggleTheme(){
    console.log("ck")
    if(userTheme == "dark"){
      setUserTheme("light")
      document.documentElement.classList.remove('dark')
      localStorage.setItem("theme","light")
    }else{
      setUserTheme("dark")
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme","dark")
    }
  }

  function addTodo(item,check) {
    let Uid = crypto.randomUUID();
    setTodos([
      ...todos,
      {
        id: Uid,
        todo: item,
        isComplete: check,
      },
    ]);
  }
  function toggleComplete(id, checked) {
    setTodos((current) => {
      return current.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isComplete: checked };
        }
        return todo;
      });
    });
    todos.forEach((todo) => console.log(todo.isComplete));
  }

  function deleteTodo(id) {
    setTodos((current) => {
      return current.filter((todo) => todo.id !== id);
    });
  }
  function clearcompleted(){
    setTodos(()=>{
      return todos.filter(todo=>todo.isComplete !== true)
    })
  }

  return (
    <div className="header-section w-[100%] relative">
      <img
        className="hidden md:block w-[100%]"
        src={userTheme=="dark"?images.bg_desk_dark:images.bg_desk_light}
        alt="background"
      />
      <img
        className="md:hidden w-[100%]"
        src={userTheme=="dark"?images.bg_mob_dark:images.bg_mob_light}
        alt="background"
      />
      <div
        className="todo-form absolute top-7  left-2/4 
        -translate-x-2/4 w-[20rem] flex flex-col lg:top-1/3 md:w-[35rem] xl:top-[55%]"
      >
        <div className="top flex justify-between align-middle w-[20rem] md:w-[35rem]">
          <h1 className="text-4xl font-bold text-[#FFFFFF]">TODO</h1>
          <div className="theme hover:cursor-pointer" onClick={()=>toggleTheme()}>
            {
              userTheme == "dark" &&(
                <img src={images.sun} alt="sun" />
              ) 
            }
            {
              userTheme == "light" &&(
                <img src={images.moon} alt="moon" />
              )
            } 
          </div>
        </div>
        <TodoForm addTodo={addTodo} />
        <TodoList
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          todos={todos}
          activeTodos={activeTodos}
          completeTodos={completeTodos}
          clearcompleted={clearcompleted}
          handleDragEnd={handleDragEnd}
        />
      </div>
    </div>
  );
}

export default App;
