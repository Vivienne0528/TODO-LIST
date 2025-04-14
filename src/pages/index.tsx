import Todo from "@/components/todo";

export default function Home() {

  return (
    <main className="bg-[#4E9CC0] h-screen m-0 p-0 flex flex-col">
      <section className="bg-white m-2 flex flex-col justify-center items-center h-full md:!m-10 ">
        <h1 className="text-[3rem] text-[#4E9CC0]">TODOLIST</h1>
        <section className="flex justify-between items-center gap-2 w-85 md:w-170 ">
          <input
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
        </section>

        <section className="carousel carousel-vertical rounded-box h-96">
          <section className="flex flex-col  carousel-item h-full">
            <Todo todo={"Read the book(at least 5 pages"} />
            <Todo todo={"Read the book(at least 5 pages"} />
            <Todo todo={"nihao"} />
            <Todo todo={"nihao"} />
            <Todo todo={"nihao"} />
            <Todo todo={"nihao"} />
            <Todo todo={"Read the book(at least 5 pages"} />

          </section>
          <section className="flex flex-col  carousel-item h-full">
            <Todo todo={"Read the book(at least 5 pages"} />
            <Todo todo={"Read the book(at least 5 pages"} />
            <Todo todo={"nihao"} />
            <Todo todo={"nihao"} />
            <Todo todo={"nihao"} />
            <Todo todo={"nihao"} />
            <Todo todo={"Read the book(at least 5 pages"} />
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
