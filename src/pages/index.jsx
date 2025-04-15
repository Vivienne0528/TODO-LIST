import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.length == 0) {
      alert("Input cannot be empty.");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: input,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTask]);
    setInput("");
  };

  useEffect(() => {
    const getTodoList = async () => {
      const url = "https://jsonplaceholder.typicode.com/todos";
      // const url = "/todoList.json";
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    };
    getTodoList();
  }, []);
  const toggleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <main className="bg-[#4E9CC0] h-screen m-0 p-0 flex flex-col">
      <section className="bg-white m-2 flex flex-col justify-center items-center h-full md:!m-10 ">
        <h1 className="text-[3rem] text-[#4E9CC0]">TODOLIST</h1>
        <form
          onSubmit={handleAddTodo}
          className="flex justify-between items-center gap-2 w-85 md:w-170 "
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="border-[#4E9CC0] border-1 text-center w-150 h-10 text-[#4E9CC0]"
            placeholder="What needs to be done?"
          />
          <button className="btn btn-square">
            <svg
              className="bg-[#4E9CC0]"
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="white"
            >
              <path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z" />
            </svg>
          </button>
        </form>

        {/* <Todo /> */}
        <section className="carousel carousel-vertical rounded-box h-96 overflow-y-auto">
          <section className="flex flex-col  carousel-item h-auto">
            <section className="flex flex-col m-0.5 w-85 md:w-170">
              {todos.map((todo) => (
                <section
                  key={todo.id}
                  className="flex justify-between items-center"
                >
                  <section className="flex">
                    <label
                      className={`${
                        todo.completed ? "line-through" : ""
                      } text-[#4E9CC0] text-[1rem] md:text-[2rem]`}
                    >
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        className="checkbox border-[#4E9CC0] bg-white checked:bg-[#4E9CC0] checked:text-white checked:border-white m-[0.4rem] "
                        onChange={() => toggleCompleted(todo.id)}
                      />
                      {todo.title}
                    </label>
                  </section>
                  <section className="flex gap-1 justify-center items-center">
                    <button className="btn btn-square bg-white border-[#4E9CC0] h-8 w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#4E9CC0"
                      >
                        <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                      </svg>
                    </button>
                    <button className="btn btn-square  bg-white border-[#4E9CC0]  h-8 w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#4E9CC0"
                      >
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                      </svg>
                    </button>
                  </section>
                </section>
              ))}
            </section>
          </section>
        </section>

        <button className="btn btn-wide text-white bg-[#4E9CC0] m-5">
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
}
