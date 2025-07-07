import { Link } from "react-router";
import type { PortraitData } from "../Data/portraitData";

interface CharacterSelectIconProps {
    portraitData: PortraitData;
}

const CharacterSelectIcon = ({ portraitData }: CharacterSelectIconProps) => {
    const { name, rarity, icon } = portraitData;
    const bgColor: string =
        rarity === "5 Star" ? "bg-yellow-600" : "bg-violet-500";

    return (
        <Link
            to={`/${name.toLowerCase()}`}
            className={`flex flex-col ${bgColor} rounded-lg hover:cursor-pointer`}
        >
            <img
                className="w-full h-full object-fit-cover"
                src={icon}
                alt={name}
            />
            <p className="bg-neutral-300 text-center p-2 rounded-b-lg font-semibold">
                {name}
            </p>
        </Link>
    );
};

export default CharacterSelectIcon;
