import { useState } from "react";
import ToDo from "../components/ToDo";

interface ToDo {
    id: number;
    todo: string;
}

const Home = () => {
    const [toAdd, setToAdd] = useState<string>("");
    const [todos, setTodos] = useState<ToDo[]>([]);

    const handleClick = (): void => {
        setTodos([...todos, { id: Date.now(), todo: toAdd }]);
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
                <ToDo key={id} id={id} todo={todo} />
            ))}
        </div>
    );
};

export default Home;
