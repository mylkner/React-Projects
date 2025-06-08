interface ToDoProps {
    id: number;
    todo: string;
}

const ToDo = ({ id, todo }: ToDoProps) => {
    return <div key={id}>{todo}</div>;
};

export default ToDo;
