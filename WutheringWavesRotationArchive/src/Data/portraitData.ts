const imgPathMaker = (name: string): string =>
    `src/Assets/Resonator_${name}.webp`;

export interface PortraitData {
    name: string;
    rarity: string;
    icon: string;
}

const portraitDb: PortraitData[] = [
    {
        name: "Rover-Havoc",
        rarity: "5 Star",
        icon: imgPathMaker("Female_Rover"),
    },
    {
        name: "Encore",
        rarity: "5 Star",
        icon: imgPathMaker("Encore"),
    },
    {
        name: "Camellya",
        rarity: "5 Star",
        icon: imgPathMaker("Camellya"),
    },
    {
        name: "Jiyan",
        rarity: "5 Star",
        icon: imgPathMaker("Jiyan"),
    },
    {
        name: "Carlotta",
        rarity: "5 Star",
        icon: imgPathMaker("Carlotta"),
    },
    {
        name: "Changli",
        rarity: "5 Star",
        icon: imgPathMaker("Changli"),
    },
];

export default portraitDb;
