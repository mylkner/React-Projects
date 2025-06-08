import { useState } from "react";
import ToDo from "../components/ToDo";

interface ToDo {
    id: number;
    todo: string;
}

const Home = () => {
    const [toAdd, setToAdd] = useState<string>("");
    const [todos, setTodos] = useState<ToDo[]>([]);

    todos.forEach((element) => {
        console.log(element.todo);
    });

    const handleClick = (): void => {
        setToAdd("");
        setTodos([...todos, { id: Date.now(), todo: toAdd }]);
    };

    const handleDelete = (idToRemove: number): void => {
        const filteredTodos = todos.filter(({ id }) => id !== idToRemove);
        setTodos(filteredTodos);
    };

    return (
        <div>
            <input
                type="text"
                value={toAdd}
                onChange={(e) => setToAdd(e.target.value)}
            />
            <button onClick={handleClick}>Add</button>
            {todos.map(({ id, todo }) => (
                <ToDo
                    key={id}
                    id={id}
                    todo={todo}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default Home;
