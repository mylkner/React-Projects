import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="w-full h-[95vh] flex flex-col items-center justify-center">
            <h1>Oops!</h1>
            <p>The character you are looking for could not be found.</p>
            <Link to={"/"} className="errorLink">
                Back to character list
            </Link>
        </div>
    );
};

export default NotFound;
