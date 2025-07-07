import { Rarities, Elements, Weapons } from "../types/characterDataTypes";

const resonatorImgPathMaker = (name: string): string =>
    `src/Assets/Resonators/Resonator_${name}.webp`;
const elementImgPathMaker = (name: Elements): string =>
    `src/Assets/Elements/${name}.webp`;
const weaponImgPathMaker = (name: Weapons): string =>
    `src/Assets/Weapons/${name}_Icon.webp`;

export interface CharacterData {
    name: string;
    rarity: Rarities;
    element: Elements;
    weapon: Weapons;
    icons: { character: string; element: string; weapon: string };
}

const characterDb: CharacterData[] = [
    {
        name: "Rover-Havoc",
        rarity: Rarities["5 Star"],
        element: Elements.Havoc,
        weapon: Weapons.Sword,
        icons: {
            character: resonatorImgPathMaker("Female_Rover"),
            element: elementImgPathMaker(Elements.Havoc),
            weapon: weaponImgPathMaker(Weapons.Sword),
        },
    },
    {
        name: "Encore",
        rarity: Rarities["5 Star"],
        element: Elements.Fusion,
        weapon: Weapons.Rectifier,
        icons: {
            character: resonatorImgPathMaker("Encore"),
            element: elementImgPathMaker(Elements.Fusion),
            weapon: weaponImgPathMaker(Weapons.Rectifier),
        },
    },
    {
        name: "Camellya",
        rarity: Rarities["5 Star"],
        element: Elements.Havoc,
        weapon: Weapons.Sword,
        icons: {
            character: resonatorImgPathMaker("Camellya"),
            element: elementImgPathMaker(Elements.Havoc),
            weapon: weaponImgPathMaker(Weapons.Sword),
        },
    },
    {
        name: "Jiyan",
        rarity: Rarities["5 Star"],
        element: Elements.Aero,
        weapon: Weapons.Broadblade,
        icons: {
            character: resonatorImgPathMaker("Jiyan"),
            element: elementImgPathMaker(Elements.Aero),
            weapon: weaponImgPathMaker(Weapons.Broadblade),
        },
    },
    {
        name: "Carlotta",
        rarity: Rarities["5 Star"],
        element: Elements.Glacio,
        weapon: Weapons.Pistols,
        icons: {
            character: resonatorImgPathMaker("Carlotta"),
            element: elementImgPathMaker(Elements.Glacio),
            weapon: weaponImgPathMaker(Weapons.Pistols),
        },
    },
    {
        name: "Changli",
        rarity: Rarities["5 Star"],
        element: Elements.Fusion,
        weapon: Weapons.Sword,
        icons: {
            character: resonatorImgPathMaker("Changli"),
            element: elementImgPathMaker(Elements.Fusion),
            weapon: weaponImgPathMaker(Weapons.Sword),
        },
    },
];

export default characterDb;
