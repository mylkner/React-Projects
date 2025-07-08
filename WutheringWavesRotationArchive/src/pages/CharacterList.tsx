import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import CharacterSelectIcon from "../components/CharacterPortrait";
import characterDb from "../Data/characterData";
import { Rarities, Elements, Weapons } from "../types/characterDataTypes";
import {
    elementImgPathMaker,
    weaponImgPathMaker,
} from "../Helpers/imgPathMakers";
import FilterGroup from "../components/FilterGroup";

const CharacterList = () => {
    const [search, setSearch] = useState<string>("");
    const [selectedRarities, setSelectedRarities] = useState<Rarities[]>([]);
    const [selectedElements, setSelectedElements] = useState<Elements[]>([]);
    const [selectedWeapons, setSelectedWeapons] = useState<Weapons[]>([]);

    const searchBar = (
        <div className="flex items-center border w-fit py-2 px-4 gap-3 border-white rounded">
            <IoSearch className="text-white text-2xl" />
            <input
                className="caret-white text-white outline-none placeholder:italic"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );

    return (
        <div className="flex flex-col flex-wrap gap-3 p-10">
            <h1 className="text-white text-4xl">Characters</h1>
            <hr className="text-white" />
            <div className="flex flex-col lg:flex-row gap-5">
                {searchBar}
                <FilterGroup
                    values={Object.values(Rarities)}
                    selected={selectedRarities}
                    setSelected={setSelectedRarities}
                    imgPathMaker={undefined}
                />
                <FilterGroup
                    values={Object.values(Elements)}
                    selected={selectedElements}
                    setSelected={setSelectedElements}
                    imgPathMaker={elementImgPathMaker}
                />
                <FilterGroup
                    values={Object.values(Weapons)}
                    selected={selectedWeapons}
                    setSelected={setSelectedWeapons}
                    imgPathMaker={weaponImgPathMaker}
                />
            </div>

            <div className="flex flex-wrap gap-3">
                {characterDb
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((data) => (
                        <CharacterSelectIcon
                            key={data.name}
                            portraitData={data}
                        />
                    ))}
            </div>
        </div>
    );
};

export default CharacterList;
