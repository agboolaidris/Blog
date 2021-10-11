import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  name: string;
  path: string;
  onClick?: () => void | null;
  style?: string | undefined;
  icon?: any | undefined;
}

const Links: React.FC<Props> = ({ onClick, path, name, style, icon }) => {
  return (
    <Link href={path}>
      <a onClick={onClick} className={`block ${style}`}>
        <span>{icon && <FontAwesomeIcon icon={icon} />}</span>
        {name}
      </a>
    </Link>
  );
};

export default Links;
