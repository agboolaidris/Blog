import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ArrowProps {
  icon: any;
  style?: string | null;
  handleClick: () => void;
}
const Arrow: React.FC<ArrowProps> = ({ icon, style, handleClick }) => {
  return (
    <span
      className={`font-extrabold  transition-all duration-100 ${style}`}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={icon} />
    </span>
  );
};

export default Arrow;
