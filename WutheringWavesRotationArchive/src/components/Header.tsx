import { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import InfoCard from "./InfoCard";

const Header = () => {
    const [showInfoCard, setShowInfoCard] = useState<boolean>(false);
    return (
        <div className="h-[5vh] bg-amber-400 p-3 flex items-center">
            <CiCircleInfo
                className="text-3xl hover:cursor-pointer hover:text-white"
                onClick={() => setShowInfoCard(true)}
            />
            {showInfoCard && <InfoCard setShowInfoCard={setShowInfoCard} />}
        </div>
    );
};

export default Header;
