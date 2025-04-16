import React from "react";
import { UseTodoContext } from "@/utils/UseTodoContext";
import { useContext } from "react";

const TodoList = () => {
  const {
    todos,
    editedId,
    newEditedInput,
    toggleCompleted,
    editInputRef,
    setEditedId,
    setNewEditedInput,
    deleteOneCompleted,
    handleSave,
  } = useContext(UseTodoContext);
  return (
    <section className="carousel carousel-vertical rounded-box h-96 overflow-y-auto">
      <section className="flex flex-col  carousel-item h-auto">
        <section className="flex flex-col m-0.5 w-85 md:w-170">
          {todos.map((todo) => (
            <section
              key={todo.id}
              className="flex justify-between items-center"
            >
              <section className="flex">
                {editedId === todo.id ? (
                  <section className="flex justify-center items-center">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      className="checkbox border-[#4E9CC0] bg-white checked:bg-[#4E9CC0] checked:text-white checked:border-white m-[0.4rem] "
                      onChange={() => toggleCompleted(todo.id)}
                    />
                    <input
                      ref={editInputRef}
                      onChange={(e) => {
                        setNewEditedInput(e.target.value);
                      }}
                      onBlur={handleSave}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSave();
                        }
                      }}
                      type="text"
                      value={newEditedInput}
                      className=" text-[#4E9CC0] text-[1rem] md:text-[2rem] border-[#4E9CC0] "
                    />
                  </section>
                ) : (
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
                )}
              </section>
              <section className="flex gap-1 justify-center items-center">
                <button
                  onClick={() => {
                    //在你点击按钮的那一刻，这个 <input /> 元素还没有被渲染成页面上的真实 DOM 节点，editInputRef.current 是 null。
                    // 要用useEffect.
                    // editInputRef.current.focus();
                    setEditedId(todo.id);
                    setNewEditedInput(todo.title);
                  }}
                  className="btn btn-square bg-white border-[#4E9CC0] h-8 w-8"
                >
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
                <button
                  onClick={() => deleteOneCompleted(todo.id)}
                  className="btn btn-square  bg-white border-[#4E9CC0]  h-8 w-8"
                >
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
  );
};

export default TodoList;
