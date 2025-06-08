interface ToDoProps {
    id: number;
    todo: string;
    handleDelete: (idToRemove: number) => void;
}

const ToDo = ({ id, todo, handleDelete }: ToDoProps) => {
    return (
        <div key={id}>
            {todo}
            <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
    );
};

export default ToDo;
