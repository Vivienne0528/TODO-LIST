import { useState, useRef, useEffect, createContext } from "react";

export const UseTodoContext = createContext(null);

export const UseTodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editedId, setEditedId] = useState("");
  const [newEditedInput, setNewEditedInput] = useState("");
  const editInputRef = useRef(null);
  useEffect(() => {
    if (editedId !== "" && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editedId]);
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
  const deleteOneCompleted = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const deleteAllCompleted = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };
  const toggleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleSave = () => {
    if (editedId !== "") {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editedId ? { ...todo, title: newEditedInput } : todo
        )
      );
      setEditedId("");
      setNewEditedInput("");
    }
  };
  return (
    <UseTodoContext.Provider
      value={{
        input,
        setInput,
        todos,
        editedId,
        setEditedId,
        editInputRef,
        setNewEditedInput,
        newEditedInput,
        toggleCompleted,
        handleAddTodo,
        handleSave,
        deleteOneCompleted,
        deleteAllCompleted,
      }}
    >
      {children}
    </UseTodoContext.Provider>
  );
};
// export const useUtils = () => {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");
//   const [editedId, setEditedId] = useState("");
//   const [newEditedInput, setNewEditedInput] = useState("");

//   const editInputRef = useRef(null);

//   useEffect(() => {
//     if (editedId !== "" && editInputRef.current) {
//       editInputRef.current.focus();
//     }
//   }, [editedId]);

//   useEffect(() => {
//     const getTodoList = async () => {
//       const url = "https://jsonplaceholder.typicode.com/todos";
//       // const url = "/todoList.json";
//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         setTodos(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     getTodoList();
//   }, []);

//   const handleAddTodo = (e) => {
//     e.preventDefault();
//     if (input.length == 0) {
//       alert("Input cannot be empty.");
//       return;
//     }

//     const newTask = {
//       id: Date.now(),
//       title: input,
//       completed: false,
//     };
//     setTodos((prevTodos) => [...prevTodos, newTask]);
//     setInput("");
//   };

//   const deleteOneCompleted = (id) => {
//     setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
//   };
//   const deleteAllCompleted = (id) => {
//     setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
//   };

//   const toggleCompleted = (id) => {
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };
//   const handleSave = () => {
//     if (editedId !== "") {
//       setTodos((prev) =>
//         prev.map((todo) =>
//           todo.id === editedId ? { ...todo, title: newEditedInput } : todo
//         )
//       );
//       setEditedId("");
//       setNewEditedInput("");
//     }
//   };
//   return {
//     input,
//     setInput,
//     todos,
//     editedId,
//     setEditedId,
//     editInputRef,
//     setNewEditedInput,
//     newEditedInput,
//     toggleCompleted,
//     handleAddTodo,
//     handleSave,
//     deleteOneCompleted,
//     deleteAllCompleted,
//   };
// };
