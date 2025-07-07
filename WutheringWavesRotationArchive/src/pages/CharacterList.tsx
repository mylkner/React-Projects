import CharacterSelectIcon from "../components/CharacterPortrait";
import portraitDb from "../Data/portraitData";

const CharacterList = () => {
    return (
        <div className="flex flex-wrap gap-3 p-10">
            {portraitDb
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((data) => (
                    <CharacterSelectIcon portraitData={data} />
                ))}
        </div>
    );
};

export default CharacterList;
