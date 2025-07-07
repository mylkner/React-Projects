export const Rarities = {
    "5 Star": "5 Star",
    "4 Star": "4 Star",
} as const;

export const Elements = {
    Aero: "Aero",
    Electro: "Electro",
    Fusion: "Fusion",
    Glacio: "Glacio",
    Havoc: "Havoc",
    Spectro: "Spectro",
} as const;

export const Weapons = {
    Broadblade: "Broadblade",
    Gauntlets: "Gauntlets",
    Pistols: "Pistols",
    Rectifier: "Rectifier",
    Sword: "Sword",
} as const;

export type Rarities = keyof typeof Rarities;
export type Elements = keyof typeof Elements;
export type Weapons = keyof typeof Weapons;
