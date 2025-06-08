interface ToDoProps {
    index: number;
    id: number;
    todo: string;
    handleDelete: (idToRemove: number) => void;
}

const ToDo = ({ index, id, todo, handleDelete }: ToDoProps) => {
    return (
        <div
            key={id}
            className="flex gap-2 justify-between items-center bg-amber-600 max-w-[600px] w-full p-5 text-white text-lg rounded-xl"
        >
            <p>
                {index + 1}. {todo}
            </p>
            <button
                className="bg-amber-900 px-5 py-2 text-white rounded-md active:bg-amber-950 cursor-pointer"
                onClick={() => handleDelete(id)}
            >
                Delete
            </button>
        </div>
    );
};

export default ToDo;
