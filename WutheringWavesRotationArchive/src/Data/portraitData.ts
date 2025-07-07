const imgPathMaker = (name: string): string =>
    `src/Assets/Resonator_${name}.webp`;

export interface PortraitData {
    name: string;
    rarity: string;
    icon: string;
}

const portraitDb: PortraitData[] = [
    {
        name: "rover-havoc",
        rarity: "5 Star",
        icon: imgPathMaker("Female_Rover"),
    },
    {
        name: "encore",
        rarity: "5 Star",
        icon: imgPathMaker("Encore"),
    },
    {
        name: "camellya",
        rarity: "5 Star",
        icon: imgPathMaker("Camellya"),
    },
    {
        name: "jiyan",
        rarity: "5 Star",
        icon: imgPathMaker("Jiyan"),
    },
    {
        name: "carlotta",
        rarity: "5 Star",
        icon: imgPathMaker("Carlotta"),
    },
    {
        name: "changli",
        rarity: "5 Star",
        icon: imgPathMaker("Changli"),
    },
];

export default portraitDb;
