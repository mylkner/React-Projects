const imgPathMaker = (name: string): string =>
    `src/Assets/Resonator_${name}.webp`;

export interface PortraitData {
    name: string;
    rarity: string;
    element: string;
    weapon: string;
    icon: string;
}

const portraitDb: PortraitData[] = [
    {
        name: "Rover-Havoc",
        rarity: "5 Star",
        element: "",
        weapon: "",
        icon: imgPathMaker("Female_Rover"),
    },
    {
        name: "Encore",
        rarity: "5 Star",
        element: "",
        weapon: "",
        icon: imgPathMaker("Encore"),
    },
    {
        name: "Camellya",
        rarity: "5 Star",
        element: "",
        weapon: "",
        icon: imgPathMaker("Camellya"),
    },
    {
        name: "Jiyan",
        rarity: "5 Star",
        element: "",
        weapon: "",
        icon: imgPathMaker("Jiyan"),
    },
    {
        name: "Carlotta",
        rarity: "5 Star",
        element: "",
        weapon: "",
        icon: imgPathMaker("Carlotta"),
    },
    {
        name: "Changli",
        rarity: "5 Star",
        element: "",
        weapon: "",
        icon: imgPathMaker("Changli"),
    },
];

export default portraitDb;
