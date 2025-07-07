import type { Dispatch, SetStateAction } from "react";

interface props {
    setShowInfoCard: Dispatch<SetStateAction<boolean>>;
}

const InfoCard = ({ setShowInfoCard }: props) => {
    return <div onClick={() => setShowInfoCard(false)}>InfoCard</div>;
};

export default InfoCard;
