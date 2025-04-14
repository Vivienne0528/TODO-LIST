import { useState } from "react"

type todoProps = {
    todo: string
}
const Todo = ({ todo }: todoProps) => {
    const [isCompleted, setIsCompleted] = useState(false)
    return (

        <section className="flex items-center justify-between m-0.5 w-85 md:w-170">
            <section className="flex justify-center items-center">

                <label className={`${isCompleted ? "line-through" : ""} text-[#4E9CC0] text-[1rem] md:text-[2rem]`}>
                    <input type="checkbox" className="checkbox border-[#4E9CC0] bg-white checked:bg-[#4E9CC0] checked:text-white checked:border-white m-[0.4rem] " onChange={() => setIsCompleted(!isCompleted)} />
                    {todo}
                </label>

            </section>
            <section className="flex gap-1 justify-center items-center" >
                <button className="btn btn-square bg-white border-[#4E9CC0] h-8 w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4E9CC0"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg>
                </button>
                <button className="btn btn-square  bg-white border-[#4E9CC0]  h-8 w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4E9CC0"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </button>

            </section>


        </section>



    )
}
export default Todo