import TodoList from "@/components/todoList";
import InputTodo from "@/components/inputTodo";
import { UseTodoContext } from "@/utils/UseTodoContext";
import { useContext } from "react";
const MainPage = () => {
  const { deleteAllCompleted } = useContext(UseTodoContext);
  return (
    <main className="bg-[#4E9CC0] h-screen m-0 p-0 flex flex-col">
      <section className="bg-white m-2 flex flex-col justify-center items-center h-full md:!m-10 ">
        <h1 className="text-[3rem] text-[#4E9CC0]">TODOLIST</h1>
        {/* <InputTodo/> */}
        <InputTodo />

        {/* <TodoList /> */}
        <TodoList />

        <button
          onClick={deleteAllCompleted}
          className="btn btn-wide text-white bg-[#4E9CC0] m-5"
        >
          Remove checked
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
      </section>
    </main>
  );
};
export default MainPage;
