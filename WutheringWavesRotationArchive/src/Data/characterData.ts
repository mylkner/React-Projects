import { Rarities, Elements, Weapons } from "../types/characterDataTypes";
import {
    resonatorImgPathMaker,
    elementImgPathMaker,
    weaponImgPathMaker,
} from "../Helpers/imgPathMakers";

export interface CharacterData {
    name: string;
    rarity: Rarities;
    element: Elements;
    weapon: Weapons;
    icons: { character: string; element: string; weapon: string };
    hasRotations: boolean;
}

const characterDb: CharacterData[] = [
    {
        name: "Rover-Havoc",
        rarity: Rarities["5\u2605"],
        element: Elements.Havoc,
        weapon: Weapons.Sword,
        icons: {
            character: resonatorImgPathMaker("Female_Rover"),
            element: elementImgPathMaker(Elements.Havoc),
            weapon: weaponImgPathMaker(Weapons.Sword),
        },
        hasRotations: true,
    },
    {
        name: "Encore",
        rarity: Rarities["5\u2605"],
        element: Elements.Fusion,
        weapon: Weapons.Rectifier,
        icons: {
            character: resonatorImgPathMaker("Encore"),
            element: elementImgPathMaker(Elements.Fusion),
            weapon: weaponImgPathMaker(Weapons.Rectifier),
        },
        hasRotations: true,
    },
    {
        name: "Camellya",
        rarity: Rarities["5\u2605"],
        element: Elements.Havoc,
        weapon: Weapons.Sword,
        icons: {
            character: resonatorImgPathMaker("Camellya"),
            element: elementImgPathMaker(Elements.Havoc),
            weapon: weaponImgPathMaker(Weapons.Sword),
        },
        hasRotations: true,
    },
    {
        name: "Jiyan",
        rarity: Rarities["5\u2605"],
        element: Elements.Aero,
        weapon: Weapons.Broadblade,
        icons: {
            character: resonatorImgPathMaker("Jiyan"),
            element: elementImgPathMaker(Elements.Aero),
            weapon: weaponImgPathMaker(Weapons.Broadblade),
        },
        hasRotations: true,
    },
    {
        name: "Carlotta",
        rarity: Rarities["5\u2605"],
        element: Elements.Glacio,
        weapon: Weapons.Pistols,
        icons: {
            character: resonatorImgPathMaker("Carlotta"),
            element: elementImgPathMaker(Elements.Glacio),
            weapon: weaponImgPathMaker(Weapons.Pistols),
        },
        hasRotations: true,
    },
    {
        name: "Changli",
        rarity: Rarities["5\u2605"],
        element: Elements.Fusion,
        weapon: Weapons.Sword,
        icons: {
            character: resonatorImgPathMaker("Changli"),
            element: elementImgPathMaker(Elements.Fusion),
            weapon: weaponImgPathMaker(Weapons.Sword),
        },
        hasRotations: true,
    },
];

export const charactersWithRotationsDb = characterDb.filter(
    (char) => char.hasRotations
);
export default characterDb;
