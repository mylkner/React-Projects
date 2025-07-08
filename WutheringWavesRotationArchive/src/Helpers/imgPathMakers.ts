import { Elements, Weapons } from "../types/characterDataTypes";

export const resonatorImgPathMaker = (name: string): string =>
    `src/Assets/Resonators/Resonator_${name}.webp`;
export const rarityImgPathMaker = (name: string): string => `${name}`;
export const elementImgPathMaker = (name: Elements): string =>
    `src/Assets/Elements/${name}.webp`;
export const weaponImgPathMaker = (name: Weapons): string =>
    `src/Assets/Weapons/${name}_Icon.webp`;
