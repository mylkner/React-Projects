import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import CharacterPortrait from "../components/CharacterPortrait";
import characterDb, { type CharacterData } from "../Data/characterData";
import { Rarities, Elements, Weapons } from "../types/characterDataTypes";
import {
    elementImgPathMaker,
    weaponImgPathMaker,
} from "../Helpers/imgPathMakers";
import FilterGroup from "../components/FilterGroup";
import { Link } from "react-router";

const CharacterList = () => {
    const [characters, setCharacters] = useState<CharacterData[]>(characterDb);
    const [search, setSearch] = useState<string>("");
    const [selectedRarities, setSelectedRarities] = useState<Rarities[]>([]);
    const [selectedElements, setSelectedElements] = useState<Elements[]>([]);
    const [selectedWeapons, setSelectedWeapons] = useState<Weapons[]>([]);

    useEffect(() => {
        const filtered = characterDb.filter((character) => {
            const matchesSearch = character.name
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesRarity =
                selectedRarities.length === 0 ||
                selectedRarities.includes(character.rarity);

            const matchesElement =
                selectedElements.length === 0 ||
                selectedElements.includes(character.element);

            const matchesWeapon =
                selectedWeapons.length === 0 ||
                selectedWeapons.includes(character.weapon);

            return (
                matchesSearch &&
                matchesRarity &&
                matchesElement &&
                matchesWeapon
            );
        });

        setCharacters(filtered);
    }, [search, selectedRarities, selectedElements, selectedWeapons]);

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
            <div className="flex flex-col xl:flex-row gap-5">
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
                {characters
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((data) => (
                        <Link
                            to={data.name.toLowerCase()}
                            className="hover:cursor-pointer"
                        >
                            <CharacterPortrait
                                key={data.name}
                                portraitData={data}
                            />
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default CharacterList;
