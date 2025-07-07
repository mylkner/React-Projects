import { useParams } from "react-router";
import rotations, { type Rotation } from "../Data/rotations";
import NotFound from "./NotFound";

const RotationPage = () => {
    const { character } = useParams<string>();

    if (!character) {
        return <p>No character specified.</p>;
    }

    const characterData: Rotation[] | undefined = rotations[character];

    if (!characterData) {
        return <NotFound />;
    }

    return <div>{character}</div>;
};

export default RotationPage;
