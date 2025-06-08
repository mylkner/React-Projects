import { useState } from "react";
import ToDo from "../components/ToDo";

interface ToDo {
    id: number;
    todo: string;
}

const Home = () => {
    const [toAdd, setToAdd] = useState<string>("");
    const [todos, setTodos] = useState<ToDo[]>([]);
    const [error, setError] = useState<string>("");

    const handleClick = (e: React.FormEvent): void => {
        e.preventDefault();
        setError("");
        if (toAdd.trim() === "") {
            setError("Input cannot be empty.");
            return;
        }
        setToAdd("");
        setTodos([...todos, { id: Date.now(), todo: toAdd }]);
    };

    const handleDelete = (idToRemove: number): void => {
        const filteredTodos = todos.filter(({ id }) => id !== idToRemove);
        setTodos(filteredTodos);
    };

    return (
        <>
            <form className="flex gap-3 justify-center items-start p-5 mt-20">
                <div className="flex flex-col gap-1 relative">
                    <input
                        type="text"
                        value={toAdd}
                        onChange={(e) => setToAdd(e.target.value)}
                        className="bg-white rounded-md p-3"
                        placeholder="todo..."
                    />
                    {error && (
                        <p className="text-red-600 font-semibold text-left absolute top-full">
                            {error}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    onClick={handleClick}
                    className="bg-amber-900 p-3 text-white rounded-md active:bg-amber-950 cursor-pointer"
                >
                    Add
                </button>
            </form>

            <div className="flex flex-col w-full gap-2 justify-center items-center p-5">
                {todos.map(({ id, todo }, index) => (
                    <ToDo
                        key={id}
                        index={index}
                        id={id}
                        todo={todo}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </>
    );
};

export default Home;
