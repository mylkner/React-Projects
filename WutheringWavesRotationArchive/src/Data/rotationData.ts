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
                rotation:
                    "Carlotta HA-E-E, Shorekeeper BA4-HA-E/Intro, Zhezhi BA3, Carlotta Q, Shorekeeper BA4-HA-E-Q-R, Intro Zhezhi R-E-BA-E3-Q, Intro Carlotta HA-E-E-MA-Forte-R6-Repeat.",
            },
            {
                team: ["Carlotta", "Zhezhi", "Verina"],
                rotation:
                    "Carlotta HA-E-E, Zhezhi BA3/Intro, Verina BA3-E-Q-R, Carlotta Q, Verina Forte, Intro Zhezhi R-E-BA-E3-Q, Intro Carlotta HA-E-E-MA-Forte-R6-Repeat.",
            },
            {
                team: ["Carlotta", "Changli", "Shorekeeper"],
                rotation:
                    "Carlotta HA-E-E, Changli R-Forte, *Shorekeeper BA4-HA-E/Intro, Changli E, Carlotta Q, Changli TS:Conquest, Shorekeeper BA4-HA-E-Q-R, Intro Changli TS:Charge-E-TS:Conquest, Carlotta HA-E-E-MA-Forte, Changli Q, Carlotta R6-HA-E-E, Intro Changli TS:Charge-MA-Forte-R-Forte. *Repeat from here.",
            },
            {
                team: ["Carlotta", "Changli", "Verina"],
                rotation:
                    "Carlotta HA-E-E, Changli R-Forte, Verina BA3-E-Q-R, Changli E, Carlotta Q, Changli TS:Charge-Q, Verina Forte, Intro Changli TS:Charge-E-TS:Conquest, Carlotta HA-E-E-MA-Forte-R6, Intro Changli TS:Charge-MA-Forte, Repeat.",
            },
        ],
    },
    {
        name: "Changli",
        data: [
            {
                team: ["Changli"],
                rotation: "",
            },
        ],
    },
    {
        name: "Lupa",
        data: [
            {
                team: ["Lupa"],
                rotation: "",
            },
        ],
    },
];

export default rotationDb;
