export interface RotationData {
    name: string;
    data: { team: string[]; rotation: string }[];
}

const rotationDb: RotationData[] = [
    {
        name: "Rover-Havoc",
        data: [
            {
                team: ["Rover-Havoc", "Danjin", "Shorekeeper"],
                rotation: "a-d-w-2",
            },
            {
                team: ["Rover-Havoc", "Danjin", "Verina"],
                rotation: "a-d-w-2",
            },
        ],
    },
    {
        name: "Encore",
        data: [
            {
                team: [""],
                rotation: "",
            },
        ],
    },
    {
        name: "Camellya",
        data: [
            {
                team: [""],
                rotation: "",
            },
        ],
    },
    {
        name: "Jiyan",
        data: [
            {
                team: [""],
                rotation: "",
            },
        ],
    },
    {
        name: "Carlotta",
        data: [
            {
                team: [""],
                rotation: "",
            },
        ],
    },
    {
        name: "Changli",
        data: [
            {
                team: [""],
                rotation: "",
            },
        ],
    },
];

export default rotationDb;
