import { UseTodoContext } from "@/utils/UseTodoContext";
import { useContext } from "react";

const InputTodo = () => {
  const { handleAddTodo, input, setInput } = useContext(UseTodoContext);
  return (
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
  );
};

export default InputTodo;
