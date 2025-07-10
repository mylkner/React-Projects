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
                rotation:
                    "Shorekeeper BA4-HA-E/Intro, Danjin BA2-E2, Rover E, Shorekeeper BA4-HA-E-Q-R, Intro Danjin E2-R-E-BA-E-Forte-Q, Intro Rover MA-E-Forte-E-*-R-Q. *Just try do your BA5 as much as possible and do your R and Q before Danjin's buff runs out.",
            },
            {
                team: ["Rover-Havoc", "Danjin", "Verina"],
                rotation:
                    "Intro* Danjin BA2-E2, Rover E, Verina BA3-E-Q-R-Forte, Intro Danjin E2-R-E-BA-E-Forte-Q, Intro Rover MA-E-Forte-E-**-R-Q. *Second rotation onwards, **Same as above.",
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
                rotation:
                    "Shorekeeper BA4-HA-E/Intro, Sanhua E-R-Forte, Camellya Q, Shorekeeper BA4-HA-E-Q-R, Intro Sanhua Forte-Q, Intro Camellya E-R-HA-Jump-Forte-E-HA-E.",
            },
            {
                team: ["Camellya", "Sanhua", "Verina"],
                rotation:
                    "Intro* Sanhua E-R-Forte, Camellya Q, Verina BA3-E-Q-R-Forte, Intro Sanhua Forte-Q, Intro Camellya E-R-HA-Jump-Forte-E-HA-E. *Second rotation onwards.",
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
                    "Carlotta HA-E-E, Shorekeeper BA4-HA-E/Intro, Zhezhi BA3, Carlotta Q, Shorekeeper BA4-HA-E-Q-R, Intro Zhezhi R-E-BA-E3-Q, Intro Carlotta HA-E-E-MA-Forte-R6.",
            },
            {
                team: ["Carlotta", "Zhezhi", "Verina"],
                rotation:
                    "Carlotta HA-E-E, Zhezhi BA3/Intro, Carlotta MA-Q, Verina BA3-E-Q-R-Forte, Intro Zhezhi R-E-BA-E3-Q, Intro Carlotta HA-E-E-MA-Forte-R6.",
            },
            {
                team: ["Carlotta", "Changli", "Shorekeeper"],
                rotation:
                    "Carlotta HA-E-E, Changli R-Forte, *Shorekeeper BA4-HA-E/Intro, Changli E, Carlotta Q, Changli TS:Conquest, Shorekeeper BA4-HA-E-Q-R, Intro Changli TS:Charge-E-TS:Conquest, Carlotta HA-E-E-MA-Forte, Changli Q, Carlotta R6-HA-E-E, Intro Changli TS:Charge-MA-Forte-R-Forte. *Repeat from here.",
            },
            {
                team: ["Carlotta", "Changli", "Verina"],
                rotation:
                    "Intro* Carlotta HA-E-E, Changli R-Forte, Verina BA3-E-Q-R, Changli E, Carlotta Q, Changli TS:Charge-Q, Verina Forte, Intro Changli TS:Charge-E-TS:Conquest, Carlotta HA-E-E-MA-Forte-R6, Intro Changli TS:Charge-MA-Forte. *Second rotation onwards.",
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
