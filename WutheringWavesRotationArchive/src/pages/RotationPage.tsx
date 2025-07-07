import { useParams } from "react-router";
import db, { type CharacterData } from "../Data/rotations";
import NotFound from "./NotFound";

const RotationPage = () => {
    const { character } = useParams<string>();

    if (!character) {
        return <p>No character specified.</p>;
    }

    const data: CharacterData | undefined = db.find(
        ({ name }) => name === character
    );

    if (!data) {
        return <NotFound />;
    }

    return <div>{data.name}</div>;
};

export default RotationPage;
