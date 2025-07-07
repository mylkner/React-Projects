import type { Dispatch, SetStateAction } from "react";

interface props {
    setShowInfoCard: Dispatch<SetStateAction<boolean>>;
}

const InfoCard = ({ setShowInfoCard }: props) => {
    return (
        <div
            className="absolute top-0 right-0 left-0 bottom-0 w-full h-full flex items-center justify-center opacity-80 bg-black ="
            onClick={() => setShowInfoCard(false)}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-1/2 h-fit rounded p-5 bg-white opacity flex flex-col gap-4"
            >
                <h2 className="text-2xl font-bold">Rotation Archive</h2>
                <p className="text-lg">
                    These rotations are just what I personally use in Wuthering
                    Waves. They may or may not be the most optimal, but just
                    what I found that I thinks works well and fits my playstyle.
                    Only characters I own/have built will be here. Feel free to
                    adjust them in any way you please.
                </p>
                <button
                    className="px-6 py-3 bg-blue-500 text-white rounded mt-auto hover:bg-blue-600 hover:cursor-pointer"
                    onClick={() => setShowInfoCard(false)}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default InfoCard;
