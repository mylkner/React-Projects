const imgPathMaker = (name: string): string =>
    `src/Assets/Resonator_${name}.webp`;

export interface CharacterData {
    name: string;
    icon: string;
    data: { team: string; rotation: string }[];
}

const db: CharacterData[] = [
    {
        name: "rover-havoc",
        icon: imgPathMaker("Female_Rover"),
        data: [
            {
                team: "",
                rotation: "",
            },
        ],
    },
    {
        name: "encore",
        icon: imgPathMaker("Encore"),
        data: [
            {
                team: "",
                rotation: "",
            },
        ],
    },
    {
        name: "camellya",
        icon: imgPathMaker("Camellya"),
        data: [
            {
                team: "",
                rotation: "",
            },
        ],
    },
    {
        name: "jiyan",
        icon: imgPathMaker("Jiyan"),
        data: [
            {
                team: "",
                rotation: "",
            },
        ],
    },
    {
        name: "carlotta",
        icon: imgPathMaker("Carlotta"),
        data: [
            {
                team: "",
                rotation: "",
            },
        ],
    },
    {
        name: "changli",
        icon: imgPathMaker("Changli"),
        data: [
            {
                team: "",
                rotation: "",
            },
        ],
    },
];

export default db;
