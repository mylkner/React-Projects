import { Link } from "react-router";
import type { CharacterData } from "../Data/characterData";

interface CharacterPortraitProps {
    portraitData: CharacterData;
}

const CharacterPortrait = ({ portraitData }: CharacterPortraitProps) => {
    const { name, rarity, icons } = portraitData;
    const bgColor: string =
        rarity === "5\u2605" ? "bg-yellow-600" : "bg-violet-500";

    return (
        <Link
            to={`/${name.toLowerCase()}`}
            className={`flex flex-col ${bgColor} rounded-lg hover:cursor-pointer relative`}
        >
            <img
                src={icons.element}
                className="absolute top-0 left-0 h-[40px] w-[40px]"
            />
            <img
                src={icons.weapon}
                className="absolute top-0 right-0 h-[40px] w-[40px]"
            />
            <img
                className="w-full h-full object-fit-cover"
                src={icons.character}
                alt={name}
            />
            <p className="bg-neutral-300 text-center p-2 rounded-b-lg font-semibold">
                {name}
            </p>
        </Link>
    );
};

export default CharacterPortrait;
