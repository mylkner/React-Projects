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
                team: ["Encore", "Sanhua", "Shorekeeper"],
                rotation: "a-w-d-a",
            },
            {
                team: ["Encore", "Sanhua", "Verina"],
                rotation: "a-w-d-a",
            },
        ],
    },
    {
        name: "Camellya",
        data: [
            {
                team: ["Camellya", "Sanhua", "Shorekeeper"],
                rotation: "a-w-d-a",
            },
            {
                team: ["Camellya", "Sanhua", "Verina"],
                rotation: "a-w-d-a",
            },
        ],
    },
    {
        name: "Jiyan",
        data: [
            {
                team: ["Jiyan", "Mortefi", "Shorekeeper"],
                rotation: "awdawd",
            },
            {
                team: ["Jiyan", "Mortefi", "Verina"],
                rotation: "awdawd",
            },
        ],
    },
    {
        name: "Carlotta",
        data: [
            {
                team: ["Carlotta", "Zhezhi", "Shorekeeper"],
                rotation: "awdawd",
            },
            {
                team: ["Carlotta", "Zhezhi", "Verina"],
                rotation: "awdawd",
            },
            {
                team: ["Carlotta", "Changli", "Shorekeeper"],
                rotation: "awdawd",
            },
            {
                team: ["Carlotta", "Changli", "Verina"],
                rotation: "awdawd",
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
    {
        name: "Lupa",
        data: [
            {
                team: [""],
                rotation: "",
            },
        ],
    },
];

export default rotationDb;
