import { useParams } from "react-router";
import db, { type RotationData } from "../Data/rotationData";
import NotFound from "./NotFound";

const RotationPage = () => {
    const { character } = useParams();

    if (!character) {
        return <p>No character specified.</p>;
    }

    const data: RotationData | undefined = db.find(
        ({ name }) => name === character
    );

    if (!data) {
        return <NotFound />;
    }

    return <div className="text-white">{data.name}</div>;
};

export default RotationPage;
